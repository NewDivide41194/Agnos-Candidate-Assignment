import ActiveSuprapubic from "../../assets/images/abdominal_active/suprapubic-active.png"
import HighlightSuprapubic from "../../assets/images/abdominal_highlight/suprapubic-highlight.png"

interface SuprapubicProps {
    isShowHighlightSuprapubic: boolean
    isSelectedAll: boolean
    _handleOnClickAbsPart: (part: string) => void
}
const Suprapubic = (props: SuprapubicProps): JSX.Element => {
    const { isShowHighlightSuprapubic, isSelectedAll, _handleOnClickAbsPart } = props;
    return (
        <div className="w-100 z-10">
            {!isSelectedAll && <div className="absolute left-[70px] bottom-[80px] w-[130px]">
                <img src={ActiveSuprapubic}
                    style={{
                        opacity: isShowHighlightSuprapubic ? 1 : 0
                    }}
                    alt="dip-active"
                />
            </div>}
            <img src={HighlightSuprapubic}
                onClick={() => _handleOnClickAbsPart("Suprapubic")}
                className="absolute bottom-[140.5px] left-[169px] w-[58px]"
                style={{
                    opacity: isShowHighlightSuprapubic ? 1 : 0
                }}
                alt="dip-highlight"
            />
        </div>


    )
}

export default Suprapubic;