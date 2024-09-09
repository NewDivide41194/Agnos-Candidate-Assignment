import { useState } from "react";

import FingerDip from "./dip";
import FingerMcp from "./mcp";
import FingerPip from "./pip";

const Finger = (): JSX.Element => {
    const [isShowHighlightDip, setIsShowHighlightDip] = useState<boolean>(false);
    const [isShowHighlightPip, setIshShowHighlightPip] = useState<boolean>(false);
    const [isShowHighlightMcp, setIsShowHighlightMcp] = useState<boolean>(false);

    console.log(isShowHighlightDip);
    const _handleOnClickDip = (): void => {
        setIsShowHighlightDip(!isShowHighlightDip);
    };

    const _handleOnClickPip = (): void => {
        setIshShowHighlightPip(!isShowHighlightPip);
    };

    const _handleOnClickMcp = (): void => {
        setIsShowHighlightMcp(!isShowHighlightMcp);
    };

    const _handleSelectAll = (): void => {
        setIsShowHighlightDip(true);
        setIshShowHighlightPip(true);
        setIsShowHighlightMcp(true);
    };

    const isSelectedAll = isShowHighlightDip && isShowHighlightMcp && isShowHighlightPip;

    return (
        <div className={"shadow p-4 relative z-0 text-center rounded-xl "}
            style={{ minWidth: 330 }}>
            <div className="mb-2">
                นิ้วของคุณเจ็บตรงไหนมากที่สุด?
            </div>
            <FingerDip
                isShowHighlightDip={isShowHighlightDip}
                isSelectedAll={isSelectedAll}
                _handleOnClickDip={_handleOnClickDip} />
            <FingerPip
                isShowHighlightPip={isShowHighlightPip}
                isSelectedAll={isSelectedAll}
                _handleOnClickPip={_handleOnClickPip} />
            <FingerMcp
                isShowHighlightMcp={isShowHighlightMcp}
                isSelectedAll={isSelectedAll}
                _handleOnClickMcp={_handleOnClickMcp} />
            <img
                src={require("../../assets/images/base_location/default-finger.png")}
                alt="default-finger"
                className="h-[400px]" />
            <button
                id="select-all"
                className={isSelectedAll
                    ?
                    "rounded-full border-2 p-2 m-2 text-white bg-gradient-to-r from-cyan-400 to-blue-900"
                    :
                    "rounded-full border-2 p-2 m-2 border-cyan-500"}
                onClick={_handleSelectAll}>
                ข้อต่ออื่นๆ หรือไม่มีอาการปวดบริเวณข้อ
            </button>
        </div>
    );
};

export default Finger;