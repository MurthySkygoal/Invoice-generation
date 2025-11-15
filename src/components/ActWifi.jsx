import React from "react";
import { Page, Text, View, Document, StyleSheet, Image, Font } from "@react-pdf/renderer";
import logo from "../assets/ActImg.png";
import icon from "../assets/profileicon.png";
import Banner from "../assets/Actbanner1.png";
import Banner1 from "../assets/Actbanner2.png";
import inter from "../fonts/Inter_18pt-Medium.ttf";
Font.register({
    family: "inter",
    fonts: [{ src: inter, fontWeight: "200" }],
});

const styles = StyleSheet.create({
    page: {
        margin: 40,
        fontSize: 9,
        color: "#333",
        fontFamily: "inter",
    },
    address: {
        marginBottom: 3,
    },
    payrow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        gap: 5,
        marginTop: 15,
    },
    paybox: {
        borderWidth: 1,
        borderColor: "#777",
        width: "14%",
    },
    boxHeader: {
        backgroundColor: "#737577",
        color: "#fff",
        textAlign: "center",
        fontWeight: 500,
        paddingVertical: 6,
    },
    boxValue: {
        textAlign: "center",
        paddingVertical: 6,
        color: "#555",
    },
    payButton: {
        backgroundColor: "#e53935",
        color: "#fff",
        fontWeight: 500,
        paddingVertical: 8,
        paddingHorizontal: 15,
        textAlign: "center",
        marginLeft: 6,
    },
    row: {
        flexDirection: "row",
        gap: 10,
        marginTop: 15,
    },
    box: {
        backgroundColor: "#e53935",
        padding: 15,
        borderRadius: 3,
        width: "42.5%",
    },
    title: {
        textAlign: "center",
        fontSize: 12,
        fontWeight: 500,
        marginBottom: 6,
        color: "#fff",
    },
    divider: {
        height: 1,
        backgroundColor: "#ffffff55",
        marginBottom: 6,
    },
    lineItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 3,
    },
    label: {
        color: "#fff",
    },
    value: {
        color: "#fff",
    },

    sectionHeader: {
        backgroundColor: "#f5f5f5",
        padding: 8,
        marginBottom: 0,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    sectionTitle: {

        color: "#e53935",
        fontSize: 12,
    },
    accountText: {
        fontSize: 8,
        color: "#333",
        textAlign: "right",
    },
    tableContainer: {
        borderStyle: "solid",
        borderWidth: 0.5,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginLeft: 10,
    },
    tableRow: {
        flexDirection: "row",
    },
    tableColHeader: {
        backgroundColor: "#e53935",
        color: "#fff",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        paddingVertical: 4,
        textAlign: "center",
        fontSize: 8,
    },
    tableColHeader1: {
        backgroundColor: "#e53935",
        color: "#fff",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        paddingVertical: 10,
        textAlign: "center",
        fontSize: 8,
    },

    tableCol: {
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        paddingVertical: 4,
        textAlign: "center",
        fontSize: 8,

    },
    subtotalRow: {
        backgroundColor: "white",
        flexDirection: "row",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderTopWidth: 0,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    subtotalText: {
        textAlign: "right",
        borderBottomRightRadius: 1,
        fontWeight: "bold",
        paddingVertical: 4,
        width: "100%",
    },
    subtotalValue: {
        textAlign: "center",
        paddingVertical: 4,
        width: "25%",
    },

    taxPage: {
        fontFamily: "Helvetica",
        fontSize: 10,
        padding: 25,
        backgroundColor: "#fff",
    },
    taxHeaderContainer: {
        backgroundColor: "#f5f5f5",
        padding: 8,
        marginBottom: 0,
        justifyContent: "space-between",
    },
    taxHeaderTitle: {
        color: "#e53935",
        fontSize: 12,
        fontWeight: "bold",
    },
    taxAccountInfo: {
        fontSize: 9,
        color: "#333",
        textAlign: "right",
    },
    taxTable: {
        display: "table",
        width: "100%",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginLeft: 10,
    },
    taxTableRow: {
        flexDirection: "row",
        marginRight: 10,
    },
    taxHeaderCell: {
        backgroundColor: "#e53935",
        color: "#fff",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        paddingVertical: 4,
        textAlign: "center",
        fontWeight: "bold",
    },
    taxCell: {
        backgroundColor: "white",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        paddingVertical: 4,
        textAlign: "center",
    },
    taxSubtotalRow: {
        flexDirection: "row",
        backgroundColor: "#fafafa",
    },
    taxSubtotalText: {
        textAlign: "right",
        fontWeight: "bold",
        paddingVertical: 4,
    },
    subtotalRow2: {
        backgroundColor: "white",
        flexDirection: "row",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderBottom: 0.5,
        borderTopWidth: 0,
        marginLeft: 10,
        marginRight: 10,

    },
    TotalPayments: {
        backgroundColor: "white",
        flexDirection: "row",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderTopWidth: 0.5,
        borderBottom: 0.5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    subtotalText2: {
        textAlign: "right",
        fontWeight: "bold",
        paddingVertical: 4,
        borderRightWidth: 0.5,
        borderStyle: "solid",
        width: "100%",
    },
    subtotalValue2: {
        textAlign: "center",
        paddingVertical: 4,
        width: "25%",
    },
    haedingTable: {
        flexDirection: "row",
        margin: 10,

    },


});

const ActWifi = ({
    name,
    addres,
    UserID,
    ActinvoiceNO,
    phone,
    BillingPeriod,
    invoiceDate,
    dueDate,
    totalAmount,
    afterDue,
    TotalCharges,
    gst,
    cgst,
    endDate,
    startDate,
    prevMonthDates,
    id,
    daysInMonth,
}) => (
    <Document>
        <Page size="A4" style={styles.page}>
            <Image src={logo} style={{ height: 80, width: 110 }} />
            <View style={{ flexDirection: "row", marginTop: 5 }}>
                <Text style={{ color: "red", fontSize: 14, fontWeight: "bold" }}>
                    TAX INVOICE
                </Text>
                <Text> (Original for the Recipient)</Text>
            </View>

            <View style={{ flexDirection: "row", gap: 180, marginTop: 5 }}>
                <View>
                    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
                        <Image src={icon} style={{ height: 12, width: 12, marginRight: 4 }} />
                        <Text style={{ color: "red", fontSize: 14, fontWeight: "bold" }}>{name}</Text>
                    </View>
                    <View style={{ color: "gray" }}>
                        <Text style={[styles.address, { width: 100 }]}>{addres}</Text>
                        <Text style={styles.address}>Mobile: {phone}</Text>
                        <Text style={styles.address}>Alternate Mobile :</Text>
                        <Text style={styles.address}>User Id : {UserID}</Text>
                        <Text style={styles.address}>Account No : {UserID}</Text>
                        <Text style={styles.address}>Invoice No. : TG-B1-{ActinvoiceNO}</Text>
                    </View>
                </View>

                <View style={{ color: "gray" }}>
                    <Text style={styles.address}>ATRIA CONVERGENCE TECHNOLOGIES LIMITED,</Text>
                    <Text style={styles.address}>8-2-618/1/2, Road No 11,</Text>
                    <Text style={styles.address}>Banjara Hills, Hyderabad, Telangana 500034.</Text>
                    <Text style={styles.address}>Ph.No : 9121212121, 7288999999</Text>
                    <Text style={styles.address}>www.actcorp.in</Text>
                    <Text style={styles.address}>E-mail : helpdesk@actcorp.in</Text>
                    <Text style={styles.address}>GSTIN : 36AACCA8907B1ZZ</Text>
                </View>
            </View>

            <View style={styles.payrow}>
                <View style={styles.paybox}>
                    <Text style={styles.boxHeader}>Billing Period</Text>
                    <Text style={styles.boxValue}>{BillingPeriod}</Text>
                </View>
                <View style={styles.paybox}>
                    <Text style={styles.boxHeader}>Invoice Date</Text>
                    <Text style={styles.boxValue}>{invoiceDate}</Text>
                </View>
                <View style={styles.paybox}>
                    <Text style={styles.boxHeader}>Amount Payable</Text>
                    <Text style={styles.boxValue}>₹{totalAmount}</Text>
                </View>
                <View style={styles.paybox}>
                    <Text style={styles.boxHeader}>Due Date</Text>
                    <Text style={styles.boxValue}>{dueDate}</Text>
                </View>
                <View style={styles.paybox}>
                    <Text style={styles.boxHeader}>Amount After Due Date</Text>
                    <Text style={styles.boxValue}>₹{afterDue}</Text>
                </View>
                <View style={{ marginTop: 30 }}>
                    <Text style={styles.payButton}>PAY BILL</Text>
                </View>
            </View>

            \            <View style={styles.row}>
                <View style={styles.box}>
                    <Text style={styles.title}>Account Summary</Text>
                    <View style={styles.divider} />
                    {[
                        ["Previous Due (A)", totalAmount],
                        ["Invoice Amount (B)", totalAmount],
                        ["Adjustments (C)", 0],
                        ["Payments Received (D)", totalAmount],
                        ["Balance Amount (A+B-C-D)", totalAmount],
                    ].map(([label, val], i) => (
                        <View key={i} style={styles.lineItem}>
                            <Text style={styles.label}>{label}</Text>
                            <Text style={styles.value}>₹{val}</Text>
                        </View>
                    ))}
                </View>

                <View style={styles.box}>
                    <Text style={styles.title}>This Month's Summary</Text>
                    <View style={styles.divider} />
                    <View style={styles.lineItem}>
                        <Text style={styles.label}>Total Charges</Text>
                        <Text style={styles.value}>₹{TotalCharges}</Text>
                    </View>
                    <View style={styles.lineItem}>
                        <Text style={styles.label}>CGST</Text>
                        <Text style={styles.value}>₹{cgst}</Text>
                    </View>
                    <View style={styles.lineItem}>
                        <Text style={styles.label}>SGST</Text>
                        <Text style={styles.value}>₹{cgst}</Text>
                    </View>
                    <View style={styles.divider} />
                    <View style={styles.lineItem}>
                        <Text style={styles.label}>Total</Text>
                        <Text style={styles.value}>₹{totalAmount}</Text>
                    </View>
                </View>
            </View>

            {/* Banner */}
            <Image src={Banner} style={{ marginTop: 10, width: "86.2%", height: 180, }} />
            <View style={{
                backgroundColor: "#f5f5f5",
                width: "86.2%",
                // marginTop: 10,
                marginVertical: 30,
            }}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Invoice Charges</Text>
                    <View>
                        <Text style={styles.accountText}>Account No: {UserID}</Text>
                        <Text style={styles.accountText}>User Name: {UserID}</Text>
                    </View>
                </View>

                {/* Table */}
                <View style={styles.tableContainer}>
                    {/* Header Row */}
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableColHeader, { width: "20%" }]}>Plan Name</Text>
                        <Text style={[styles.tableColHeader, { width: "15%" }]}>From Date</Text>
                        <Text style={[styles.tableColHeader, { width: "15%" }]}>To Date</Text>
                        <Text style={[styles.tableColHeader, { width: "15%" }]}>Quantity</Text>
                        <Text style={[styles.tableColHeader, { width: "15%" }]}>Rental</Text>
                        <Text style={[styles.tableColHeader, { width: "18%" }]}>Net Amount</Text>
                    </View>

                    {/* Data Row */}
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCol, { width: "20%" }]}>A Max Loyalty 1M</Text>
                        <Text style={[styles.tableCol, { width: "15%" }]}>{startDate}</Text>
                        <Text style={[styles.tableCol, { width: "15%" }]}>{endDate}</Text>
                        <Text style={[styles.tableCol, { width: "15%" }]}>{daysInMonth}days</Text>
                        <Text style={[styles.tableCol, { width: "15%" }]}>{TotalCharges}</Text>
                        <Text style={[styles.tableCol, { width: "18%" }]}>{TotalCharges}</Text>
                    </View>
                </View>

                <View style={styles.subtotalRow}>
                    <Text style={styles.subtotalText}>Sub Total:</Text>
                    <Text style={styles.subtotalValue}>{TotalCharges}</Text>
                </View>
            </View>



        </Page >
        <Page size="A4" style={styles.page}>

            <View
                style={{
                    backgroundColor: "#f5f5f5",
                    width: "86.2%",
                    marginBottom: 15,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: 10,
                        borderBottomWidth: 1,
                        borderColor: "#ccc",
                    }}
                >
                    <Text style={{ fontSize: 12, color: "#e53935", }}> Tax Details</Text>

                    <View>
                        <Text style={{ fontSize: 8 }}>Account No: {UserID}</Text>
                        <Text style={{ fontSize: 8 }}>User Name: {UserID}</Text>
                    </View>
                </View>

                <View
                    style={{
                        width: "96.2%",
                        borderWidth: 1,
                        borderColor: "#ccc",
                        fontSize: 8,
                        marginLeft: 10,
                        marginBottom: 10,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            borderBottomWidth: 1,
                            borderColor: "#ccc",
                        }}
                    >
                        <View
                            style={{
                                width: "20%",
                                padding: 6,
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                backgroundColor: "#e53935",
                            }}
                        >
                            <Text style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>
                                Plan Name
                            </Text>
                        </View>

                        <View
                            style={{
                                width: "15%",
                                padding: 6,
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                backgroundColor: "#e53935",
                            }}
                        >
                            <Text style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>
                                HSN Code
                            </Text>
                        </View>

                        <View
                            style={{
                                width: "15%",
                                padding: 6,
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                backgroundColor: "#e53935",
                            }}
                        >
                            <Text style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>
                                Taxable Amount
                            </Text>
                        </View>

                        <View
                            style={{
                                width: "20%",
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                backgroundColor: "#e53935",
                            }}
                        >
                            <Text style={{ color: "#fff", fontWeight: "bold", textAlign: "center", padding: 4 }}>
                                CGST
                            </Text>

                            <View style={{ flexDirection: "row" }}>
                                <View
                                    style={{
                                        width: "50%",
                                        padding: 4,
                                        borderRightWidth: 1,
                                        borderColor: "#ccc",
                                    }}
                                >
                                    <Text style={{ color: "#fff", textAlign: "center" }}>Rate %</Text>
                                </View>
                                <View style={{ width: "50%", padding: 4 }}>
                                    <Text style={{ color: "#fff", textAlign: "center" }}>Amount</Text>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                width: "20%",
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                backgroundColor: "#e53935",
                            }}
                        >
                            <Text style={{ color: "#fff", fontWeight: "bold", textAlign: "center", padding: 4 }}>
                                SGST
                            </Text>

                            <View style={{ flexDirection: "row" }}>
                                <View
                                    style={{
                                        width: "50%",
                                        padding: 4,
                                        borderRightWidth: 1,
                                        borderColor: "#ccc",
                                    }}
                                >
                                    <Text style={{ color: "#fff", textAlign: "center" }}>Rate %</Text>
                                </View>
                                <View style={{ width: "50%", padding: 4 }}>
                                    <Text style={{ color: "#fff", textAlign: "center" }}>Amount</Text>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                width: "10%",
                                padding: 6,
                                backgroundColor: "#e53935",
                            }}
                        >
                            <Text style={{ color: "#fff", fontWeight: "bold", textAlign: "center" }}>
                                Total Tax
                            </Text>
                        </View>
                    </View>


                    <View style={{ flexDirection: "row" }}>
                        <View
                            style={{
                                width: "20%",
                                padding: 6,
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Text>A Max Loyalty 1M</Text>
                        </View>

                        <View
                            style={{
                                width: "15%",
                                padding: 6,
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                textAlign: "center",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Text>998422</Text>
                        </View>

                        <View
                            style={{
                                width: "15%",
                                padding: 6,
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                textAlign: "center",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Text>{TotalCharges}</Text>
                        </View>

                        <View
                            style={{
                                width: "20%",
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                backgroundColor: "#fff",
                            }}
                        >
                            <View style={{ flexDirection: "row" }}>
                                <View
                                    style={{
                                        width: "50%",
                                        padding: 6,
                                        borderRightWidth: 1,
                                        borderColor: "#ccc",
                                    }}
                                >
                                    <Text style={{ textAlign: "center" }}>9</Text>
                                </View>
                                <View style={{ width: "50%", padding: 6 }}>
                                    <Text style={{ textAlign: "center" }}>{cgst}</Text>
                                </View>
                            </View>
                        </View>

                        <View
                            style={{
                                width: "20%",
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                backgroundColor: "#fff",
                            }}
                        >
                            <View style={{ flexDirection: "row" }}>
                                <View
                                    style={{
                                        width: "50%",
                                        padding: 6,
                                        borderRightWidth: 1,
                                        borderColor: "#ccc",
                                    }}
                                >
                                    <Text style={{ textAlign: "center" }}>9</Text>
                                </View>
                                <View style={{ width: "50%", padding: 6 }}>
                                    <Text style={{ textAlign: "center" }}>{cgst}</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ width: "10%", padding: 6, backgroundColor: "#fff" }}>
                            <Text style={{ textAlign: "center" }}>{gst}</Text>
                        </View>
                    </View>

                    <View
                        style={{
                            flexDirection: "row",
                            borderTopWidth: 1,
                            borderColor: "#ccc",
                        }}
                    >
                        <View style={{ width: "20%", padding: 6, backgroundColor: "#fff" }}></View>
                        <View style={{ width: "15%", padding: 6, backgroundColor: "#fff" }}></View>

                        <View
                            style={{
                                width: "15%",
                                padding: 6,
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Text>Sub Total:</Text>
                        </View>

                        <View
                            style={{
                                width: "20%",
                                padding: 6,
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                textAlign: "center",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Text>{cgst}</Text>
                        </View>

                        <View
                            style={{
                                width: "20%",
                                padding: 6,
                                borderRightWidth: 1,
                                borderColor: "#ccc",
                                textAlign: "center",
                                backgroundColor: "#fff",
                            }}
                        >
                            <Text>{cgst}</Text>
                        </View>

                        <View style={{ width: "10%", padding: 6, textAlign: "center", backgroundColor: "#fff" }}>
                            <Text>{gst}</Text>
                        </View>
                    </View>
                </View>
            </View>


            <View style={{
                width: "86.2%",
                marginTop: 10,
                marginBottom: 10,
                backgroundColor: "#fafafa",
            }}>
                <View style={styles.haedingTable}>
                    <Text style={[styles.tableColHeader1, { width: "38%" }]}>INVOICE AMOUNT:</Text>
                    <Text style={[styles.tableColHeader1, { width: "12%" }]}>{TotalCharges}</Text>
                    <Text style={[styles.tableColHeader1, { width: "20%" }]}>{cgst}</Text>
                    <Text style={[styles.tableColHeader1, { width: "20%" }]}>{cgst}</Text>
                    <Text style={[styles.tableColHeader1, { width: "10%" }]}>{totalAmount}</Text>
                </View>
            </View>



            <View style={{
                backgroundColor: "#f5f5f5",
                width: "86.2%",
            }}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>Payments Received</Text>
                    <View>
                        <Text style={styles.accountText}>Account No: {UserID}</Text>
                        <Text style={styles.accountText}>User Name: {UserID}</Text>
                    </View>
                </View>

                <View style={styles.tableContainer}>
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableColHeader, { width: "15%" }]}>RefNo</Text>
                        <Text style={[styles.tableColHeader, { width: "13%" }]}>Txn Date</Text>
                        <Text style={[styles.tableColHeader, { width: "20%" }]}> Details</Text>
                        <Text style={[styles.tableColHeader, { width: "10%" }]}>Amount</Text>
                        <Text style={[styles.tableColHeader, { width: "10%" }]}>Total</Text>
                        <Text style={[styles.tableColHeader, { width: "30%" }]}>Remarks</Text>
                    </View>

                    <View style={styles.tableRow}>
                        <Text style={[styles.tableCol, { width: "15%" }]}>P1-{id}</Text>
                        <Text style={[styles.tableCol, { width: "13%" }]}>{prevMonthDates}</Text>
                        <Text style={[styles.tableCol, { width: "20%" }]}>Payment: Online Mode</Text>
                        <Text style={[styles.tableCol, { width: "10%" }]}>{totalAmount}</Text>
                        <Text style={[styles.tableCol, { width: "10%" }]}>{totalAmount}</Text>
                        <Text style={[styles.tableCol, { width: "30%" }]}> PAYUPayment for subscriber - {UserID}</Text>
                    </View>
                </View>

                <View style={styles.subtotalRow2}>
                    <Text style={[styles.subtotalText2, {
                        width: "59.2%", borderRightColor: "gray", borderStyle: "solid",
                    }]}>Payments :  </Text>
                    <Text style={[styles.subtotalValue2, { width: "40%" }]}>{totalAmount}</Text>
                </View>

                <View style={styles.TotalPayments}>
                    <Text style={styles.subtotalText2}>Total Payments :  </Text>
                    <Text style={styles.subtotalValue2}>{totalAmount}</Text>
                </View>
            </View>

            <View style={{
                marginTop: 10,
                borderWidth: 1,
                borderColor: "gray",
                borderStyle: "solid",
                width: "86.2%",
            }}>
                <View style={{ borderBottom: 1, borderBottomColor: "gray", }}>
                    <Text style={{ marginBottom: 10, marginTop: 10, marginLeft: 10, fontWeight: "bold", color: "gray", fontSize: 12, }}> Terms and Conditions</Text>
                </View>
                <View style={{ marginLeft: 10, marginTop: 15, marginBottom: 15, }}>
                    <Text> 1. 18% interest will be levied on overdue payments.</Text>
                    <Text>2. Late Payment fee of Rs. 100/- (+ GST) shall be applicable if bill is paid post due date.</Text>
                    <Text> 3. In case of overdue/ defaults, the right to deactivate your services, is reserved.</Text>
                    <Text>4. All disputes are subject to Telangana jurisdiction.</Text>
                    <Text> 5. Unless otherwise stated,tax on this invoice is not payable under reverse charge.</Text>
                    <Text> 6. This Invoice is system generated hence signature and stamp is not required.</Text>
                </View>
            </View>
            <Image src={Banner1} style={{ marginTop: 10, width: "86.2%", height: 170, }} />

            <View style={{
                backgroundColor: "#e53935",
                color: "#fff",
                fontSize: 8,
                width: "86.2%",
                marginTop: 15, paddingVertical: 20
            }}>
                <Text style={{ textAlign: "center", marginBottom: 3, }}>
                    Registered office address: No. 1, 2nd and 3rd Floor, Indian Express Building, Queens Road, Bangalore - 560001.
                </Text>
                <Text style={{ textAlign: "center", marginBottom: 3, }}>
                    CIN no: U72900KA2000PLC027290 Tel: 08042884288 Fax no: 080-42884200
                </Text>
            </View>
        </Page>
    </Document >
);

export default ActWifi;
