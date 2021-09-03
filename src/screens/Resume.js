import React from 'react';
import DownloadIcon from '@material-ui/icons/GetApp';

function Resume() {
    return (
        <div className='Page-container' >
        <div className='Page-container-vertical' style={{ marginTop: 20 }}>
           <embed style={{ backgroundColor: 'white' }} src="https://instahyre-2.s3-ap-south-1.amazonaws.com/media/resume/793338/8d05f8795f/Shubham_Ojha.pdf#toolbar=0&navpanes=0&scrollbar=0" width="800px" height="1110px" />
           <div className='App-button' style={{margin: 30}}><DownloadIcon /><a href="https://instahyre-2.s3-ap-south-1.amazonaws.com/media/resume/793338/8d05f8795f/Shubham_Ojha.pdf" target="_blank" download>Download</a></div>
        </div>
        </div>
    );
}
  
export default Resume;