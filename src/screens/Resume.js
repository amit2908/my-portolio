import React from 'react';
import DownloadIcon from '@material-ui/icons/GetApp';

function Resume() {
    var resumeLink = 'https://cdn.filestackcontent.com/Y5PRbQKOQ9iWhVfP4PZS'
    return (
        <div className="Centered-Items-Horizontally">
            <div className='Compact-Page-Size' style={{ marginTop: 20 }}>
                <div className="Centered-Items-Horizontally">
                    <embed style={{ backgroundColor: 'white' }} src={resumeLink} width="800px" height="1110px" />
                    <div className='App-button' style={{ margin: 30 }}><DownloadIcon /><a href={resumeLink} target="_blank" download>Download</a></div>
                </div>
            </div>
        </div>
    );
}

export default Resume;