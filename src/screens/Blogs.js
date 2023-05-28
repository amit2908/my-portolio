import { border, fontWeight } from '@material-ui/system'
import React, { Component } from 'react'
// import { Document, Page, Text, View, StyleSheet, Rect } from '@react-pdf/renderer';
// import { PDFViewer } from '@react-pdf/renderer';
// const fs = require('fs');

// Create Document Component
// const TD = (content) => (
//         <View style={styles.td}>
//             <Text>{content}</Text>
//         </View>
// );


// // Create Document Component
// const TH = (title) => (
//         <View style={styles.header}>
//             <Text>{title}</Text>
//         </View>
// );


// // Create Document Component
// const TR = () => (
//         <View style={styles.header}>
//             <TH>Header 1</TH>
//         </View>
// );

// // Create Document Component
// const Table = () => (
//         <View style={styles.section}>
//             <TR />
//         </View>
// );

// // Create Document Component
// const MyDocument = () => (
//     <Document>
//     <Page size="A4" style={styles.page}>
//         <Table style={styles.table} />
//     </Page>
//     </Document>
// );

class Blogs extends Component {
    
    createPage(){
        // const doc = new PDFDocument({size: 'A7'});
        //  doc.addPage({size: 'A7'});
    }

    render() {
        // this.createPage = this.createPage.bind(this)
        return (
            <div className='Centered-Items-Horizontally'>
            <div className='Compact-Page-Size'>
            <br/>
            {/* <PDFViewer><MyDocument></MyDocument></PDFViewer> */}
            </div>
            <button style={styles.button} onClick={this.createPage}>Generate PDF</button>
            </div>
        )
    }
}



export default Blogs

const styles = {
   table: {
    backgroundColor: '#DCFFFF',
    border : "solid 1px black",
    padding : 10,
    margin : 30,
    width: '100%',
    borderRadius: 10
   },
   button: {
    padding: 16,
    marginBottom: 10,
    borderRadius: 10
   },
   page: {
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  table: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  },
  header: {
    padding: 10,
    fontWeight: 'bold'
  },
  td: {
    padding: 10
  }
}