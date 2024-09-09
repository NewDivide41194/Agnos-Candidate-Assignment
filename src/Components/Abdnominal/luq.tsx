import ActiveLUQ from "../../assets/images/abdominal_active/luq-active.png";
import HighlightLUQ from "../../assets/images/abdominal_highlight/luq-highlight.png";

interface LUQProps {
    isShowHighlightLUQ: boolean
    isSelectedAll: boolean
    _handleOnClickAbsPart: (part: string) => void
}
const LUQ = (props: LUQProps): JSX.Element => {
    const { isShowHighlightLUQ, isSelectedAll, _handleOnClickAbsPart } = props;
    return (
        <div className="w-100 z-10">
            {!isSelectedAll && <div className="absolute left-[250px] top-[208px] w-[130px]">
                <img src={ActiveLUQ}
                    style={{
                        opacity: isShowHighlightLUQ ? 1 : 0
                    }}
                    alt="luq-active"
                />
            </div>}
            <img src={HighlightLUQ}
                onClick={(): void => _handleOnClickAbsPart("LUQ")}

                className="absolute top-[238.8px] left-[210px] w-[58px]"
                style={{
                    opacity: isShowHighlightLUQ ? 1 : 0
                }}
                alt="luq-highlight"
            />
        </div>

    );
};

export default LUQ;