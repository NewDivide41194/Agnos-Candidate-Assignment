import ActiveRuq from "../../assets/images/abdominal_active/ruq-active.png";
import HighlightRuq from "../../assets/images/abdominal_highlight/ruq-highlight.png";

interface RuqProps {
    isShowHighlightRuq: boolean
    isSelectedAll: boolean
    _handleOnClickAbsPart: (part: string) => void
}
const Ruq = (props: RuqProps): JSX.Element => {
    const { isShowHighlightRuq, isSelectedAll, _handleOnClickAbsPart } = props;
    return (
        <div className="w-100 z-10">
            {!isSelectedAll&&<div className="absolute left-[14px] top-[253px] w-[120px]">
                <img src={ActiveRuq}
                    style={{
                        opacity: isShowHighlightRuq ? 1 : 0
                    }}
                    alt="dip-active"
                />
            </div>}
            <img src={HighlightRuq}
                onClick={(): void => _handleOnClickAbsPart("Ruq")}
                className="absolute top-[242px] left-[126.4px] w-[62px]"
                style={{
                    opacity: isShowHighlightRuq ? 1 : 0
                }}
                alt="dip-highlight"
            />
        </div>

    );
};

export default Ruq;