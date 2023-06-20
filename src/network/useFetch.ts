import React, { useEffect, useState } from "react";
import { ResumeData } from "./resumeModel";

const useFetch = (url: URL) => {

    const [resumeData, setResumeData]  = useState<null|ResumeData>(null);

    const urlData = useEffect(() => {
        const data = fetch(url)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setResumeData(json)
        })
    }, [])

    return resumeData
}

export default useFetch;