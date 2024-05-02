import AirDatepicker from "air-datepicker";
import "air-datepicker/air-datepicker.css";

import React, { useEffect, useRef } from "react";

function AirDatepickerReact(props) {
    let $input = useRef();
    let dp = useRef();

    useEffect(() => {
        dp.current = new AirDatepicker($input.current, { ...props });
    }, []);

    useEffect(() => {
        dp.current.update({ ...props });
    }, [props]);


    return <input placeholder="請選擇日期區間" ref={$input} />;
}

export default AirDatepickerReact;
