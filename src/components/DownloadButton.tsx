import React from 'react'
import DownloadIcon from '@material-ui/icons/GetApp';

function DownloadButton(props: { link: string }) {
    const { link } = props;
  return (
    <div className="App-button">
      <DownloadIcon style={{ padding: 10 }} />
      <a href={link} target="_blank" download>
        Download!
      </a>
    </div>
  );
}

export default DownloadButton
