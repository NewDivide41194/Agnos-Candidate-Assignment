import ActiveUmbilicus from "../../assets/images/abdominal_active/umbilicus-active.png"
import HighlightUmbilicus from "../../assets/images/abdominal_highlight/umbilicus-highlight.png"

interface UmbilicusProps {
    isShowHighlightUmbilicus: boolean
    isSelectedAll: boolean
    _handleOnClickAbsPart: (part: string) => void
}
const Umbilicus = (props: UmbilicusProps): JSX.Element => {
    const { isShowHighlightUmbilicus, isSelectedAll, _handleOnClickAbsPart } = props;
    return (
        <div className="w-100 z-10">
            {!isSelectedAll && <div className="absolute left-[60px] top-[212px] w-[130px]">
                <img src={ActiveUmbilicus}
                    style={{
                        opacity: isShowHighlightUmbilicus ? 1 : 0
                    }}
                    alt="dip-active"
                />
            </div>}
            <img src={HighlightUmbilicus}
                onClick={() => _handleOnClickAbsPart("Umbilicus")}
                className="absolute top-[280.2px] left-[176.4px] w-[43px]"
                style={{
                    opacity: isShowHighlightUmbilicus ? 1 : 0
                }}
                alt="dip-highlight"
            />
        </div>


    )
}

export default Umbilicus;