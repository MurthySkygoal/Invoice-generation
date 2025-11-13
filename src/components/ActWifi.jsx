import React from "react";
import { Page, Text, View, Document, StyleSheet, Image } from "@react-pdf/renderer";
import logo from "../assets/ActImg.png";
import icon from "../assets/profileicon.png";
import Banner from "../assets/Actbanner1.png";
import Banner1 from "../assets/Actbanner2.png";

// Styles
const styles = StyleSheet.create({
    page: {
        margin: 40,
        fontSize: 9,
        fontFamily: "Helvetica",
        color: "#333",
    },
    address: {
        marginBottom: 3,
    },
    payrow: {
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        gap: 6,
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
        // width: "86.2%",
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
        fontSize: 9,
        color: "#333",
        textAlign: "right",
    },
    tableContainer: {
        // width: "86.2%",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        marginLeft: 10,
        // marginTop: 10
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
        // fontWeight: "bold",
    },
    tableCol: {
        borderStyle: "solid",
        borderWidth: 0.5,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        paddingVertical: 4,
        textAlign: "center",
    },
    subtotalRow: {
        // width: "86.2%",
        flexDirection: "row",
        borderStyle: "solid",
        borderWidth: 0.5,
        borderTopWidth: 0,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        // paddingBottom: 10,
        // backgroundColor: "#f5f5f5",
    },
    subtotalText: {
        // width: "86.2%",
        textAlign: "right",
        borderBottomRightRadius: 1,
        fontWeight: "bold",
        paddingVertical: 4,
        width: "100%",
    },
    subtotalValue: {
        // width: "86.2%",
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
        flexDirection: "row",
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
    },
    taxTableRow: {
        flexDirection: "row",
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
});

// Main Document Component
const ActWifi = ({
    name,
    addres,
    UserID,
    ActinvoiceNO,
    phone,
    billingPeriod = "Nov, 2025",
    invoiceDate = "01/11/2025",
    dueDate = "10/11/2025",
    totalAmount = 619.5,
    amountAfterDueDate = 737.5,
    taxable = 525,
    cgst = 47.25,
    sgst = 47.25,
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
                    <Text style={styles.boxValue}>{billingPeriod}</Text>
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
                    <Text style={styles.boxValue}>₹{amountAfterDueDate}</Text>
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
                        <Text style={styles.value}>₹{taxable}</Text>
                    </View>
                    <View style={styles.lineItem}>
                        <Text style={styles.label}>CGST</Text>
                        <Text style={styles.value}>₹{cgst}</Text>
                    </View>
                    <View style={styles.lineItem}>
                        <Text style={styles.label}>SGST</Text>
                        <Text style={styles.value}>₹{sgst}</Text>
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
                        <Text style={[styles.tableCol, { width: "15%" }]}>01/11/2025</Text>
                        <Text style={[styles.tableCol, { width: "15%" }]}>30/11/2025</Text>
                        <Text style={[styles.tableCol, { width: "15%" }]}>30 days</Text>
                        <Text style={[styles.tableCol, { width: "15%" }]}>525</Text>
                        <Text style={[styles.tableCol, { width: "18%" }]}>525</Text>
                    </View>
                </View>

                <View style={styles.subtotalRow}>
                    <Text style={styles.subtotalText}>Sub Total:</Text>
                    <Text style={styles.subtotalValue}>525</Text>
                </View>
            </View>



        </Page >
        <Page size="A4" style={styles.page}>

            <View style={styles.taxHeaderContainer}>
                <Text style={styles.taxHeaderTitle}>Tax Details</Text>
                <View>
                    <Text style={styles.taxAccountInfo}>Account No: {UserID}</Text>
                    <Text style={styles.taxAccountInfo}>User Name: {UserID}</Text>
                </View>
            </View>

            {/* Table Header */}
            <View style={styles.taxTable}>
                {/* Column Headings */}
                <View style={styles.taxTableRow}>
                    <Text style={[styles.taxHeaderCell, { width: "20%" }]}>Plan Name</Text>
                    <Text style={[styles.taxHeaderCell, { width: "10%" }]}>HSN Code</Text>
                    <Text style={[styles.taxHeaderCell, { width: "12%" }]}>Taxable Amount</Text>

                    {/* CGST Group */}
                    <View style={[styles.taxHeaderCell, { width: "20%", flexDirection: "row" }]}>
                        <Text style={[styles.taxHeaderCell, { width: "50%" }]}>Rate %</Text>
                        <Text style={[styles.taxHeaderCell, { width: "50%" }]}>Amount</Text>
                    </View>

                    {/* SGST Group */}
                    <View style={[styles.taxHeaderCell, { width: "20%", flexDirection: "row" }]}>
                        <Text style={[styles.taxHeaderCell, { width: "50%" }]}>Rate %</Text>
                        <Text style={[styles.taxHeaderCell, { width: "50%" }]}>Amount</Text>
                    </View>

                    <Text style={[styles.taxHeaderCell, { width: "8%" }]}>Total Tax</Text>
                </View>

                {/* Data Row */}
                <View style={styles.taxTableRow}>
                    <Text style={[styles.taxCell, { width: "20%" }]}>A Max Loyalty 1M</Text>
                    <Text style={[styles.taxCell, { width: "10%" }]}>998422</Text>
                    <Text style={[styles.taxCell, { width: "12%" }]}>525</Text>

                    {/* CGST */}
                    <View style={[styles.taxCell, { width: "20%", flexDirection: "row" }]}>
                        <Text style={[styles.taxCell, { width: "50%" }]}>9</Text>
                        <Text style={[styles.taxCell, { width: "50%" }]}>47.25</Text>
                    </View>

                    {/* SGST */}
                    <View style={[styles.taxCell, { width: "20%", flexDirection: "row" }]}>
                        <Text style={[styles.taxCell, { width: "50%" }]}>9</Text>
                        <Text style={[styles.taxCell, { width: "50%" }]}>47.25</Text>
                    </View>

                    <Text style={[styles.taxCell, { width: "8%" }]}>94.5</Text>
                </View>

                {/* Subtotal Row */}
                <View style={styles.taxSubtotalRow}>
                    <Text style={[styles.taxCell, { width: "20%" }]}>Sub Total:</Text>
                    <Text style={[styles.taxCell, { width: "10%" }]}></Text>
                    <Text style={[styles.taxCell, { width: "12%" }]}></Text>
                    <Text style={[styles.taxCell, { width: "10%" }]}></Text>
                    <Text style={[styles.taxCell, { width: "10%" }]}>47.25</Text>
                    <Text style={[styles.taxCell, { width: "10%" }]}></Text>
                    <Text style={[styles.taxCell, { width: "10%" }]}>47.25</Text>
                    <Text style={[styles.taxCell, { width: "8%" }]}>94.5</Text>
                </View>
            </View>
            <Image src={Banner1} style={{ marginTop: 10, width: "90%", height: 170, }} />
        </Page>
    </Document >
);

export default ActWifi;
