import React, { useState } from "react";
import ucRepair from "../assets/ucrepairBill.jpg";
import PKRepair from "../assets/PkrepairBill.jpg";
import { RxCross1 } from "react-icons/rx";
import { pdf } from "@react-pdf/renderer";
import { ToWords } from "to-words";
import TextField from "@mui/material/TextField";
import UrbanCompany1Bill from "../components/urbanCompanyRepairBill";
import PKsupply from "../components/PKrepairBill";

const Repairs = () => {
  const [open, setOpen] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const [ucitem, setucItem] = useState("");
  const [ucPlatformPrice, setucPlatformPrice] = useState("");
  const [ucprice, setucPrice] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [items, setItems] = useState([{ item: "", quantity: "", price: "" }]);
  const [interestAmount, setInterestAmount] = useState("");
  const [errors, setErrors] = useState({});

  const HeaderTitles = [
    { name: "", width: "3%" },
    { name: "Item", width: "35%" },
    { name: "GST Rate", width: "7%" },
    { name: "Quantity", width: "8%" },
    { name: "Rate", width: "12%" },
    { name: "Amount", width: "12%" },
    { name: "IGST", width: "13%" },
    { name: "Total", width: "12%" },
  ];

  const repairBill = [
    { id: 1, img: ucRepair },
    { id: 2, img: PKRepair },
  ];

  // UC Bill Calculations
  const calcPlatformPrice = Number(ucPlatformPrice) || 0;
  const ucgstAmount = (calcPlatformPrice * 0.18).toFixed(2);
  const uctotalPlatformFee = (calcPlatformPrice + calcPlatformPrice * 0.18).toFixed(2);
  const partnerInvoice = Number(ucprice) || 0;
  const ucigstAmount = (partnerInvoice * 0.025).toFixed(2);
  const ucPartnerTotalFee = (partnerInvoice + partnerInvoice * 0.025).toFixed(2);

  // Item Management
  const handleAddItem = () => setItems([...items, { item: "", quantity: "", price: "" }]);
  const handleRemoveItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  // Convert to Words
  const toWords = new ToWords({
    localeCode: "en-IN",
    converterOptions: { currency: true, ignoreDecimal: false },
  });
  const convertToWords = (value) => {
    const num = Number(value);
    if (isNaN(num) || value === "" || value == null) return "";
    return toWords.convert(num);
  };

  const ucPlatformPriceInWords = convertToWords(ucPlatformPrice);
  const ucplucPlatformgstInWords = convertToWords(ucgstAmount);

  // Generate Random Invoice Number
  const generateInvoiceNo = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const randomLetter = () => letters[Math.floor(Math.random() * letters.length)];
    const letterPart = randomLetter() + randomLetter() + randomLetter() + randomLetter();
    const numberPart = Math.floor(1000000000 + Math.random() * 900000000);
    return letterPart + numberPart;
  };

  const resetForm = () => {
    setOpen(false);
    setSelectedBill(null);
    setName("");
    setAddress("");
    setucItem("");
    setucPlatformPrice("");
    setucPrice("");
    setDueDate("");
    setInterestAmount("");
    setItems([{ item: "", quantity: "", price: "" }]);
    setErrors({});
  };

  const validateUCBill = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!address.trim()) newErrors.address = "Address is required";
    if (!ucitem.trim()) newErrors.ucitem = "Item is required";
    if (!ucPlatformPrice.trim()) newErrors.ucPlatformPrice = "Platform price is required";
    if (!ucprice.trim()) newErrors.ucprice = "Item price is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePKBill = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Name is required";
    if (!address.trim()) newErrors.address = "Address is required";

    items.forEach((item, i) => {
      if (!item.item.trim()) newErrors[`item-${i}`] = "Item name required";
      if (!item.quantity.trim()) newErrors[`quantity-${i}`] = "Quantity required";
      if (!item.price.trim()) newErrors[`price-${i}`] = "Price required";
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 1st Bill - Urban Company
  const handleCreateBill1 = async () => {
    if (!validateUCBill()) return;

    const invoiceNumber1 = generateInvoiceNo();
    const invoiceNumber2 = generateInvoiceNo();
    const today = new Date();
    const currentDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const blob = await pdf(
      <UrbanCompany1Bill
        name={name}
        address={address}
        InvoiceNo={invoiceNumber1}
        InvoiceNo2={invoiceNumber2}
        dueDate={dueDate}
        dateTime={currentDate}
        ucitem={ucitem}
        ucPlatformPrice={ucPlatformPrice}
        ucprice={ucprice}
        ucgstAmount={ucgstAmount}
        uctotalPlatformFee={uctotalPlatformFee}
        ucPartnerTotalFee={ucPartnerTotalFee}
        ucigstAmount={ucigstAmount}
        ucPlatformPriceInWords={ucPlatformPriceInWords}
        ucplucPlatformgstInWords={ucplucPlatformgstInWords}
      />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `UrbanCompany1Bill.pdf`;
    link.click();
    URL.revokeObjectURL(url);

    resetForm();
  };

  // 🧾 2nd Bill - PK Repair
  const handleCreateBill2 = async () => {
    if (!validatePKBill()) return;

    const invoiceNumber = generateInvoiceNo();
    const today = new Date();
    const currentDate = today.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const itemsWithTotal = items.map((item) => {
      const quantity = Number(item.quantity);
      const price = Number(item.price);
      const gstRate = Number(item.gst) || 0;

      const baseAmount = quantity * price;
      const gstAmount = (baseAmount * gstRate) / 100;
      const total = baseAmount + gstAmount;
      return { ...item, baseAmount, gstAmount, total };
    });

    const onlyAmount = itemsWithTotal.reduce((sum, item) => sum + item.baseAmount, 0);
    const totalGST = itemsWithTotal.reduce((sum, item) => sum + item.gstAmount, 0);
    const grandTotal = itemsWithTotal.reduce((sum, item) => sum + item.total, 0);
    const finalAmountWithInterest = grandTotal + Number(interestAmount || 0);

    const blob = await pdf(
      <PKsupply
        name={name}
        address={address}
        PKInvoiceNo={invoiceNumber}
        onlyAmount={onlyAmount}
        dateTime={currentDate}
        HeaderTitles={HeaderTitles}
        items={itemsWithTotal}
        totalGST={totalGST}
        grandTotal={grandTotal}
        finalAmountWithInterest={finalAmountWithInterest}
        amountInWords={convertToWords(finalAmountWithInterest)}
        PKheadings={HeaderTitles}
      />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `PKRepair.pdf`;
    link.click();
    URL.revokeObjectURL(url);

    resetForm();
  };

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 px-4 sm:px-8 md:px-16">
      {repairBill.map((RepairBill) => (
        <img
          key={RepairBill.id}
          src={RepairBill.img}
          className="h-auto w-[250px] md:w-[300px] hover:scale-105 duration-300 cursor-pointer border border-black rounded-lg"
          onClick={() => {
            setSelectedBill(RepairBill);
            setOpen(true);
          }}
        />
      ))}

      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-2">
          <div className="bg-[#EDEDED] rounded-lg shadow-lg w-full sm:w-[600px] md:w-[700px] lg:w-[800px] relative p-6 sm:p-8 md:p-10 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center">
              <p className="text-xl sm:text-2xl font-semibold">Details</p>
              <button className="text-black text-2xl font-bold cursor-pointer" onClick={() => setOpen(false)}>
                <RxCross1 />
              </button>
            </div>

            {/* Urban Company Bill */}
            {selectedBill?.id === 1 && (
              <div className="flex flex-col gap-5 mt-4">
                <TextField label="Name" value={name} error={!!errors.name} helperText={errors.name} onChange={(e) => setName(e.target.value)} />
                <TextField label="Address" value={address} error={!!errors.address} helperText={errors.address} onChange={(e) => setAddress(e.target.value)} />
                <TextField label="Item" value={ucitem} error={!!errors.ucitem} helperText={errors.ucitem} onChange={(e) => setucItem(e.target.value)} />
                <div className="flex flex-col sm:flex-row gap-3">
                  <TextField label="Platform Price" type="text" value={ucPlatformPrice} error={!!errors.ucPlatformPrice} helperText={errors.ucPlatformPrice} onChange={(e) => setucPlatformPrice(e.target.value.replace(/[^0-9]/g, ""))} />
                  <TextField label="Item Price" type="text" value={ucprice} error={!!errors.ucprice} helperText={errors.ucprice} onChange={(e) => setucPrice(e.target.value.replace(/[^0-9]/g, ""))} />
                </div>
                <button onClick={handleCreateBill1} className="w-full bg-black text-white py-2 px-6 rounded mt-4 cursor-pointer hover:bg-gray-900">
                  Create Bill
                </button>
              </div>
            )}

            {/* PK Repair Bill */}
            {selectedBill?.id === 2 && (
              <div className="flex flex-col gap-5 mt-4">
                <TextField label="Name" value={name} error={!!errors.name} helperText={errors.name} onChange={(e) => setName(e.target.value)} />
                <TextField label="Address" value={address} error={!!errors.address} helperText={errors.address} onChange={(e) => setAddress(e.target.value)} />

                {items.map((item, index) => (
                  <div key={index} className="flex flex-col gap-3 border p-3 rounded-md bg-white">
                    <div className="flex justify-between items-center">
                      <p className="font-semibold text-base sm:text-lg">Item {index + 1}</p>
                      {items.length > 1 && (
                        <button className="text-red-500 text-sm font-medium cursor-pointer" onClick={() => handleRemoveItem(index)}>
                          Remove
                        </button>
                      )}
                    </div>
                    <TextField label="Item" value={item.item} error={!!errors[`item-${index}`]} helperText={errors[`item-${index}`]} onChange={(e) => handleItemChange(index, "item", e.target.value)} />
                    <div className="flex flex-col sm:flex-row gap-3">
                      <TextField label="Quantity" value={item.quantity} error={!!errors[`quantity-${index}`]} helperText={errors[`quantity-${index}`]} onChange={(e) => handleItemChange(index, "quantity", e.target.value.replace(/[^0-9]/g, ""))} />
                      <TextField label="Price" value={item.price} error={!!errors[`price-${index}`]} helperText={errors[`price-${index}`]} onChange={(e) => handleItemChange(index, "price", e.target.value.replace(/[^0-9]/g, ""))} />
                      <TextField label="GST (%)" value={item.gst || ""} onChange={(e) => handleItemChange(index, "gst", e.target.value.replace(/[^0-9.]/g, ""))} />
                    </div>
                  </div>
                ))}

                <button onClick={handleAddItem} className="bg-gray-700 text-white py-2 px-4 rounded-md w-fit hover:bg-gray-800 cursor-pointer">
                  + Add Item
                </button>

                <button onClick={handleCreateBill2} className="w-full bg-black text-white py-2 px-6 rounded mt-4 cursor-pointer hover:bg-gray-900">
                  Create Bill
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Repairs;
