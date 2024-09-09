import ActiveEpigastrium from "../../assets/images/abdominal_active/epigastrium-active.png"
import HighlightEpigastrium from "../../assets/images/abdominal_highlight/epigastrium-highlight.png"

interface EpigastriumProps {
    isShowHighlightEpigastrium: boolean
    isSelectedAll: boolean
    _handleOnClickAbsPart: (part: string) => void
}
const Epigastrium = (props: EpigastriumProps): JSX.Element => {
    const { isShowHighlightEpigastrium, isSelectedAll, _handleOnClickAbsPart } = props;
    return (
        <div className="w-100 z-10">
            {!isSelectedAll && <div className="absolute left-[60px] top-[150px] w-[130px]">
                <img src={ActiveEpigastrium}
                    style={{
                        opacity: isShowHighlightEpigastrium ? 1 : 0
                    }}
                    alt="dip-active"
                />
            </div>}
            <img src={HighlightEpigastrium}
                onClick={() => _handleOnClickAbsPart("Epigastrium")}
                className="absolute top-[204px] left-[167px] w-[61px]"
                style={{
                    opacity: isShowHighlightEpigastrium ? 1 : 0
                }}
                alt="dip-highlight"
            />
        </div>


    )
}

export default Epigastrium;