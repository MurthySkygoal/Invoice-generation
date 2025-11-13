import React, { useState } from "react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
} from "@mui/material";
import { FaFileExcel } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

const GuestExcelGenerator = () => {
  const [open, setOpen] = useState(false);
  const [guests, setGuests] = useState([
    { name: "", guests: "", timing: "", phone: "", email: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...guests];
    updated[index][field] = value;
    setGuests(updated);
  };

  const addGuest = () => {
    setGuests([
      ...guests,
      { name: "", guests: "", timing: "", phone: "", email: "" },
    ]);
  };

  const removeGuest = (index) => {
    const updated = guests.filter((_, i) => i !== index);
    setGuests(updated);
  };

  const handleGenerateExcel = () => {
    if (
      guests.some(
        (g) => !g.name || !g.guests || !g.timing || !g.phone || !g.email
      )
    ) {
      alert("Please fill out all fields before generating Excel.");
      return;
    }

    const sheetData = [
      ["Guest Details Sheet"],
      [],
      ["Name", "No. of Guests", "Timing", "Phone Number", "Email"],
      ...guests.map((g) => [
        g.name,
        g.guests,
        g.timing,
        g.phone,
        g.email,
      ]),
    ];

    const ws = XLSX.utils.aoa_to_sheet(sheetData);
    ws["!cols"] = [
      { wch: 20 },
      { wch: 15 },
      { wch: 20 },
      { wch: 20 },
      { wch: 30 },
    ];

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Guest Info");

    const wbout = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    saveAs(
      new Blob([wbout], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      }),
      `Guest_Details_List.xlsx`
    );

    setOpen(false);
    alert("Excel file generated successfully!");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] bg-[#F9FAFB] p-6">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center border border-gray-200 hover:shadow-xl transition duration-300">
        {/* Excel Icon */}
        <FaFileExcel size={100} className="text-[#217346] mb-6" />

        <p className="text-gray-600 text-center mb-8 max-w-md">
          Click below to generate a Guest Excel Sheet.
        </p>

        {/* Open Popup Button */}
        <Button
          variant="contained"
          color="success"
          onClick={() => setOpen(true)}
          style={{
            fontWeight: "bold",
            fontSize: "16px",
            padding: "10px 24px",
            textTransform: "none",
            borderRadius: "12px",
          }}
        >
          Open Guest Form
        </Button>

        {/* Popup Dialog */}
        <Dialog open={open} onClose={() => setOpen(false)} maxWidth="md" fullWidth>
          <div style={{ fontWeight: "bold" }}>
            <DialogContent>Enter Guest Details</DialogContent>
          </div>

          <DialogContent>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {guests.map((guest, index) => (
                <div
                  key={index}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr auto",
                    gap: 8,
                    alignItems: "center",
                  }}
                >
                  <TextField
                    label="Name"
                    value={guest.name}
                    onChange={(e) =>
                      handleChange(index, "name", e.target.value)
                    }
                  />
                  <TextField
                    label="No. of Guests"
                    type="number"
                    value={guest.guests}
                    onChange={(e) =>
                      handleChange(index, "guests", e.target.value)
                    }
                  />
                  <TextField
                    label="Timing"
                    type="time"
                    value={guest.timing}
                    onChange={(e) =>
                      handleChange(index, "timing", e.target.value)
                    }
                  />
                  <TextField
                    label="Phone"
                    value={guest.phone}
                    onChange={(e) =>
                      handleChange(index, "phone", e.target.value)
                    }
                  />
                  <TextField
                    label="Email"
                    type="email"
                    value={guest.email}
                    onChange={(e) =>
                      handleChange(index, "email", e.target.value)
                    }
                  />
                  {guests.length > 1 && (
                    <IconButton
                      color="error"
                      onClick={() => removeGuest(index)}
                    >
                      <AiOutlineDelete />
                    </IconButton>
                  )}
                </div>
              ))}

              <Button
                onClick={addGuest}
                startIcon={<AiOutlinePlus />}
                variant="outlined"
                color="success"
                style={{ width: "fit-content" }}
              >
                Add Guest
              </Button>
            </div>
          </DialogContent>

          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button
              onClick={handleGenerateExcel}
              variant="contained"
              color="success"
            >
              Generate Excel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
};

export default GuestExcelGenerator;
