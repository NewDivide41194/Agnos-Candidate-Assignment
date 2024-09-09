import ActiveLLQ from "../../assets/images/abdominal_active/llq-active.png"
import HighlightLLQ from "../../assets/images/abdominal_highlight/llq-highlight.png"

interface LLQProps {
    isShowHighlightLLQ: boolean
    isSelectedAll: boolean
    _handleOnClickAbsPart: (part: string) => void
}
const LLQ = (props: LLQProps): JSX.Element => {
    const { isShowHighlightLLQ, isSelectedAll, _handleOnClickAbsPart } = props;
    return (
        <div className="w-100 z-10">
            {!isSelectedAll && <div className="absolute left-[250px] top-[340px] w-[130px]">
                <img src={ActiveLLQ}
                    style={{
                        opacity: isShowHighlightLLQ ? 1 : 0
                    }}
                    alt="dip-active"
                />
            </div>}
            <img src={HighlightLLQ}
                onClick={() => _handleOnClickAbsPart("LLQ")}
                className="absolute top-[304.5px] left-[211.3px] w-[55.5px]"
                style={{
                    opacity: isShowHighlightLLQ ? 1 : 0
                }}
                alt="dip-highlight"
            />
        </div>


    )
}

export default LLQ;