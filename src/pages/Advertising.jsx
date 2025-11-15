import React, { useState, useEffect } from "react";
import { pdf } from "@react-pdf/renderer";
import Bill from "../assets/Bill.png";
import { RxCross1 } from "react-icons/rx";
import TextField from "@mui/material/TextField";
import { BillDocument } from "../components/BillDocument";

const Advertising = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showError, setShowError] = useState(false);

  const Image = [...Array(8)];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleCreateBill = async () => {
    if (!name || !email || !phone) {
      setShowError(true);
      return;
    }
    const currentDateTime = new Date().toString().split(" GMT")[0];
    const blob = await pdf(
      <BillDocument
        name={name}
        email={email}
        phone={phone}
        dateTime={currentDateTime}
      />
    ).toBlob();

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Bill.pdf";
    link.click();

    URL.revokeObjectURL(url);

    setOpen(false);
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="grid grid-cols-4 px-[7rem] gap-4">
      {Image.map((_, index) => (
        <img
          key={index}
          src={Bill}
          alt={`Bill ${index + 1}`}
          className="h-full w-[300px] hover:scale-110 duration-300 cursor-pointer"
          onClick={() => setOpen(true)}
        />
      ))}

      {open && (
        <div className="fixed h-full inset-0 flex items-center justify-center bg-black/50">
          <div className="bg-[#EDEDED] rounded-lg shadow-lg w-[400px] relative p-10">
            <button
              className="w-full text-black text-xl font-bold cursor-pointer flex justify-end pb-7"
              onClick={() => setOpen(false)}
            >
              <RxCross1 />
            </button>
            <div className="flex flex-col gap-5">
              <div className="w-full">
                <TextField
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  InputProps={{
                    className: "h-13 bg-white w-[320px] rounded-md",
                  }}
                />
                {name === "" && showError && (
                  <p className="text-sm text-red-500 font-medium">
                    *This field is --required.
                  </p>
                )}
              </div>

              <div>
                <TextField
                  label="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputProps={{
                    className: "h-13 bg-white rounded-md w-[320px]",
                  }}
                />
                {email === "" && showError && (
                  <p className="text-sm text-red-500 font-medium">
                    *This field is required.
                  </p>
                )}
              </div>

              <div>
                <TextField
                  label="Phone"
                  type="text"
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, "");
                    if (val.length <= 10) setPhone(val);
                  }}
                  InputProps={{
                    className: " h-13 bg-white w-[320px] rounded-md",
                  }}
                />
                {phone === "" && showError && (
                  <p className="text-sm text-red-500 font-medium">
                    *This field is required.
                  </p>
                )}
              </div>

              <button
                onClick={handleCreateBill}
                className="w-full bg-black text-white py-2 px-6 rounded mt-4 cursor-pointer"
              >
                Create Bill
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Advertising;
