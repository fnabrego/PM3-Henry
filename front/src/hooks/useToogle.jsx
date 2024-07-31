import { useState } from "react";

export default function useToogle(status){
    const [value, setValue] = useState(status);
    const toogle = ()=>setValue(!value);
    return [value, toogle]
}