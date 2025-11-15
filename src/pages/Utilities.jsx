import React, { useState, useEffect } from "react";
import { pdf } from "@react-pdf/renderer";
import UtilitiesBill from "../assets/Utilities.jpg";
import Wifi from "../assets/Act.png";
import { RxCross1 } from "react-icons/rx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers";
import { addDays } from "date-fns";
import { subMonths, startOfMonth, endOfMonth, format, getDaysInMonth } from "date-fns";
import TextField from "@mui/material/TextField";
import UtilitiesBillDocument from "../components/UtilitiesBillDocument";
import ActWifiBill from "../components/ActWifi";

const Utilities = () => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "test",
    totalAmount: "1000",
    phone: "9999999999",
  });


  const [addres, setAddres] = useState("kphb, housingbard, hyderabad, telangana, pin-500072")
  const [showError, setShowError] = useState(false);
  const [selectedBill, setSelectedBill] = useState(null);
  const [invoiceDate, setinvoiceDate] = useState(null);
  const [BillingPeriod, setBillingPeriod] = useState("")
  const [formattedInvoiceDate, setFormattedInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [daysInMonth, setDaysInMonth] = useState(0);
  const [prevMonthDates, setPrevMonthDates] = useState([]);

  const images = [
    { id: 1, image: UtilitiesBill },
    { id: 2, image: Wifi },
  ];

  function getRandomPrevMonthDate(date) {
    const prevMonth = subMonths(date, 1);
    const firstDate = startOfMonth(prevMonth);

    const randomDay = Math.floor(Math.random() * 10) + 1;

    const randomDate = new Date(firstDate);
    randomDate.setDate(randomDay);

    return format(randomDate, "dd, MMM, yyyy");
  }


  const handleDateChange = (newValue) => {
    setinvoiceDate(newValue);

    if (newValue) {
      setFormattedInvoiceDate(format(newValue, "dd, MMM, yyyy"));
      setBillingPeriod(format(newValue, "MMM yyyy"));

      const tenDaysLater = addDays(newValue, 10);
      setDueDate(format(tenDaysLater, "dd, MMM, yyyy"));

      const start = startOfMonth(newValue);
      const end = endOfMonth(newValue);

      setStartDate(format(start, "dd, MMM, yyyy"));
      setEndDate(format(end, "dd, MMM, yyyy"));

      const days = getDaysInMonth(newValue);
      setDaysInMonth(days);

      const prevDates = getRandomPrevMonthDate(newValue);
      setPrevMonthDates(prevDates);
    }
  };

  const randomNumber = () => Math.floor(1e10 + Math.random() * 9e10).toString();
  const UserID = () => Math.floor(1e10 + Math.random() * 9e11).toString();
  const ActinvoiceNO = () => Math.floor(100000000 + Math.random() * 999999999);
  const id = () => Math.floor(99999999 + Math.random() * 99999999);


  const totalAmountNum = Number(formData.totalAmount);
  const amountAfterDueDate = totalAmountNum * 0.19;
  const afterDue = totalAmountNum + amountAfterDueDate;
  const gst = totalAmountNum * 0.18;
  const TotalCharges = totalAmountNum - gst;
  const cgst = gst / 2;

  // function generateIdSimple(prefix = "P1", digits = 8) {
  //   const max = 10 ** digits;
  //   const num = Math.floor(Math.random() * max).toString().padStart(digits, "0");
  //   return `${prefix}-${num}`;
  // }


  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  {/* 1St Bill */ }
  const handleCreateBill1 = async () => {
    const { name, totalAmount, phone } = formData;

    if (!name || !totalAmount || !phone) {
      setShowError(true);
      return;
    }

    const blob = await pdf(
      <UtilitiesBillDocument
        name={name}
        totalAmount={totalAmount}
        phone={phone}
        OrderNo={randomNumber()}
        billPaymentOfNumber={randomNumber()}
        generateRandom11Digit={randomNumber()}
        dateTime={new Date().toLocaleString()}
      />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}_${randomNumber()}.pdf`;
    link.click();
    URL.revokeObjectURL(url);

    setFormData({ name: "", totalAmount: "", phone: "" });
    setOpen(false);
    setShowError(false);
    setSelectedBill(null);
  };

  {/*2nd Bill */ }

  const handleCreateBill2 = async () => {
    const { name, totalAmount, phone } = formData;
    if (!name || !totalAmount || !phone) {
      setShowError(true);
      return;
    }

    const blob = await pdf(
      <ActWifiBill
        name={name}
        totalAmount={totalAmount}
        phone={phone}
        addres={addres}
        invoiceDate={formattedInvoiceDate}
        BillingPeriod={BillingPeriod}
        dueDate={dueDate}
        afterDue={afterDue}
        TotalCharges={TotalCharges}
        gst={gst}
        cgst={cgst}
        startDate={startDate}
        endDate={endDate}
        daysInMonth={daysInMonth}
        id={id()}
        prevMonthDates={prevMonthDates}
        UserID={UserID()}
        ActinvoiceNO={ActinvoiceNO()}
      />

    ).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${name}.pdf`;
    link.click();
    URL.revokeObjectURL(url);


    setFormData({ name: "", totalAmount: "", phone: "" });
    setOpen(false);
    setShowError(false);
    setAddres("");
    setinvoiceDate("");
    setSelectedBill(null);

  };


  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 px-6 sm:px-10 lg:px-24 gap-6 sm:gap-8">

      {/* Bill Images */}
      {images.map(({ id, image }) => (
        <img
          key={id}
          src={image}
          alt="Bill"
          className="w-75 h-110 rounded-lg border border-black cursor-pointer hover:scale-105 duration-300 shadow-sm"
          onClick={() => {
            setSelectedBill({ id });
            setOpen(true);
          }}
        />
      ))}

      {open && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/70 z-50 p-4 animate-fadeIn"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-xl w-full max-w-[420px] p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-black text-xl"
              onClick={() => setOpen(false)}
            >
              <RxCross1 />
            </button>

            {/*BILL 1 */}
            {selectedBill?.id === 1 && (
              <div className="flex flex-col gap-6 mt-4 bg-white rounded-2xl shadow-md p-6 sm:p-8 transition-all duration-300">
                {/* Header */}
                <div className="text-center mb-2">
                  <h2 className="text-2xl font-semibold text-gray-800">Urban Company Bill</h2>
                  <p className="text-sm text-gray-500 mt-1">
                    Please enter customer details to generate the bill.
                  </p>
                </div>

                {/* Input Fields */}
                <div className="flex flex-col gap-5">
                  {["name", "totalAmount", "phone"].map((field, i) => (
                    <div key={i} className="flex flex-col">
                      <TextField
                        label={
                          field === "name"
                            ? "Customer Name"
                            : field === "totalAmount"
                              ? "Total Amount Paid"
                              : "Phone Number"
                        }
                        variant="outlined"
                        fullWidth
                        value={formData[field]}
                        onChange={(e) => {
                          let value = e.target.value;
                          if (field === "phone") {
                            value = value.replace(/[^0-9]/g, "").slice(0, 10);
                          }
                          setFormData({ ...formData, [field]: value });
                        }}
                        InputProps={{
                          className:
                            "bg-gray-50 rounded-lg focus-within:border-gray-700 focus-within:ring-1 focus-within:ring-gray-600 transition-all duration-200",
                        }}
                      />
                      {formData[field] === "" && showError && (
                        <p className="text-xs text-red-500 mt-1 italic">
                          *This field is required.
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-gray-200 mt-2"></div>

                {/* Submit Button */}
                <div className="flex justify-center mt-2">
                  <button
                    onClick={handleCreateBill1}
                    className="w-full sm:w-auto px-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-200"
                  >
                    Create Bill
                  </button>
                </div>
              </div>
            )}



            {/*2nd Bill */}
            {selectedBill?.id === 2 && (
              <div className="flex flex-col gap-6 mt-4 bg-white rounded-2xl shadow-md p-6 sm:p-8 transition-all">
                {/* Section Header */}
                <div className="text-center">
                  <h2 className="text-2xl font-semibold text-gray-800">Customer Details</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Please fill in the required information to generate your bill.
                  </p>
                </div>

                {/* Input Fields */}
                <div className="flex flex-col gap-5">
                  {["name", "totalAmount", "phone"].map((field, i) => (
                    <div key={i}>
                      <TextField
                        label={
                          field === "name"
                            ? "Full Name"
                            : field === "totalAmount"
                              ? "Total Amount Paid"
                              : "Phone Number"
                        }
                        variant="outlined"
                        value={formData[field]}
                        onChange={(e) => {
                          let value = e.target.value;
                          if (field === "phone") {
                            value = value.replace(/[^0-9]/g, "").slice(0, 10);
                          }
                          setFormData({ ...formData, [field]: value });
                        }}
                        fullWidth
                        InputProps={{
                          className:
                            "bg-gray-50 rounded-lg focus-within:border-gray-700 transition-all",
                        }}
                      />
                      {formData[field] === "" && showError && (
                        <p className="text-xs text-red-500 mt-1 italic">
                          *This field is required.
                        </p>
                      )}
                    </div>
                  ))}

                  {/* Address Field */}
                  <div>
                    <TextField
                      label="Address"
                      multiline
                      rows={3}
                      value={addres}
                      onChange={(e) => setAddres(e.target.value)}
                      fullWidth
                      variant="outlined"
                      InputProps={{
                        className:
                          "bg-gray-50 rounded-lg focus-within:border-gray-700 transition-all",
                      }}
                    />
                    {addres === "" && showError && (
                      <p className="text-xs text-red-500 mt-1 italic">
                        *Address is required.
                      </p>
                    )}
                  </div>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                      label="Due Date"
                      value={invoiceDate}
                      onChange={handleDateChange}
                      slotProps={{
                        textField: {
                          fullWidth: true,
                          sx: {
                            backgroundColor: "white",
                            borderRadius: "8px",
                          },
                        },
                      }}
                    />
                  </LocalizationProvider>
                </div>

                {/* Divider */}
                <hr className="border-gray-200 my-2" />

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    onClick={handleCreateBill2}
                    className="w-full sm:w-auto px-6 py-3 bg-black text-white font-semibold rounded-lg shadow hover:bg-gray-800 transition-all duration-200"
                  >
                    Create Bill
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
};

export default Utilities;
