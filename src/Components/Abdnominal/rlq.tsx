import ActiveRLQ from "../../assets/images/abdominal_active/rlq-active.png"
import HighlightRLQ from "../../assets/images/abdominal_highlight/rlq-highlight.png"

interface RLQProps {
    isShowHighlightRLQ: boolean
    isSelectedAll: boolean
    _handleOnClickAbsPart: (part: string) => void
}
const RLQ = (props: RLQProps): JSX.Element => {
    const { isShowHighlightRLQ, isSelectedAll, _handleOnClickAbsPart } = props;
    return (
        <div className="w-100 z-10">
            {!isSelectedAll && <div className="absolute left-[10px] top-[320px] w-[130px]">
                <img src={ActiveRLQ}
                    style={{
                        opacity: isShowHighlightRLQ ? 1 : 0
                    }}
                    alt="dip-active"
                />
            </div>}
            <img src={HighlightRLQ}
                onClick={() => _handleOnClickAbsPart("RLQ")}
                className="absolute top-[304px] left-[126px] w-[58px]"
                style={{
                    opacity: isShowHighlightRLQ ? 1 : 0
                }}
                alt="dip-highlight"
            />
        </div>


    )
}

export default RLQ;