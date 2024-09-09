import { useState } from "react";


import DefaultAbdnominal from "../../assets/images/base_location/default-abs.png"
import Epigastrium from "./epigastrium";
import LLQ from "./llq";
import LUQ from "./luq";
import RLQ from "./rlq";
import Suprapubic from "./suprapubic"
import Umbilicus from "./umbilibus";
import Ruq from "./ruq";

const Abdnominal = (): JSX.Element => {
    const [absRecord, setAbsRecord] = useState<Record<string, boolean>>({
        isShowEpigastrium: false,
        isShowLlq: false,
        isShowLuq: false,
        isShowRlq: false,
        isShowSuprapubic: false,
        isShowUmbilicus: false,
        isShowRuq: false
    });

    const _handleOnClickAbsPart = (part: string) => {
        switch (part) {
            case "Epigastrium":
                setAbsRecord({ ...absRecord, isShowEpigastrium: !absRecord.isShowEpigastrium })
                break
            case "LLQ":
                setAbsRecord({ ...absRecord, isShowLlq: !absRecord.isShowLlq })
                break
            case "LUQ":
                setAbsRecord({ ...absRecord, isShowLuq: !absRecord.isShowLuq })
                break
            case "RLQ":
                setAbsRecord({ ...absRecord, isShowRlq: !absRecord.isShowRlq })
                break
            case "Suprapubic":
                setAbsRecord({ ...absRecord, isShowSuprapubic: !absRecord.isShowSuprapubic })
                break
            case "Umbilicus":
                setAbsRecord({ ...absRecord, isShowUmbilicus: !absRecord.isShowUmbilicus })
                break
            case "Ruq":
                setAbsRecord({ ...absRecord, isShowRuq: !absRecord.isShowRuq })
                break
            default:
                break
        }
    }

    const _handleSelectAll = () => {
        setAbsRecord({
            isShowEpigastrium: true,
            isShowLlq: true,
            isShowLuq: true,
            isShowRlq: true,
            isShowSuprapubic: true,
            isShowUmbilicus: true,
            isShowRuq: true
        })
    }

    const isSelectedAll = Object.values(absRecord).every((val: boolean) => val === true);

    return (
        <div className="shadow p-4 relative z-0 text-center rounded-xl">
            <div className="mb-2">
                นิ้วของคุณเจ็บตรงไหนมากที่สุด?
            </div>
            <Epigastrium
                isShowHighlightEpigastrium={absRecord.isShowEpigastrium}
                isSelectedAll={isSelectedAll}
                _handleOnClickAbsPart={_handleOnClickAbsPart} />
            <LLQ
                isShowHighlightLLQ={absRecord.isShowLlq}
                isSelectedAll={isSelectedAll}
                _handleOnClickAbsPart={_handleOnClickAbsPart} />
            <LUQ
                isShowHighlightLUQ={absRecord.isShowLuq}
                isSelectedAll={isSelectedAll}
                _handleOnClickAbsPart={_handleOnClickAbsPart} />
            <RLQ
                isShowHighlightRLQ={absRecord.isShowRlq}
                isSelectedAll={isSelectedAll}
                _handleOnClickAbsPart={_handleOnClickAbsPart} />
            <Suprapubic
                isShowHighlightSuprapubic={absRecord.isShowSuprapubic}
                isSelectedAll={isSelectedAll}
                _handleOnClickAbsPart={_handleOnClickAbsPart} />
            <Umbilicus
                isShowHighlightUmbilicus={absRecord.isShowUmbilicus}
                isSelectedAll={isSelectedAll}
                _handleOnClickAbsPart={_handleOnClickAbsPart} />
            <Ruq
                isShowHighlightRuq={absRecord.isShowRuq}
                isSelectedAll={isSelectedAll}
                _handleOnClickAbsPart={_handleOnClickAbsPart} />
            <img src={DefaultAbdnominal} alt="default-finger" className="h-[400px]" />
            <button
                className={isSelectedAll
                    ?
                    "rounded-full border-2 p-2 m-2 text-white bg-gradient-to-r from-cyan-400 to-blue-900"
                    :
                    "rounded-full border-2 p-2 m-2 border-cyan-500"}
                onClick={_handleSelectAll}>
                ปวดท้อง
            </button>
        </div>
    )
}

export default Abdnominal;