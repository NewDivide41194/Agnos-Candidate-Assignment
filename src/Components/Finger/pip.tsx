import ActivePip from "../../assets/images/finger_active/pip-active.png";
import HighlightPip from "../../assets/images/finger_highlight/pip-highlight.png";

interface FingerPipProps {
    isShowHighlightPip: boolean
    isSelectedAll: boolean
    _handleOnClickPip: () => void
}

const FingerPip = (props: FingerPipProps): JSX.Element => {
    const { isShowHighlightPip, isSelectedAll, _handleOnClickPip } = props;
    return (
        <>
            <div className="w-100 z-20 absolute left-[11.5%] top-[25.8%] w-[71%]"
                onClick={_handleOnClickPip}>
                {!isSelectedAll && <div className="relative">
                    <div className="absolute top-[-25px] left-[145px] w-[130px]">
                        <img src={ActivePip}
                            style={{
                                opacity: isShowHighlightPip ? 1 : 0
                            }}
                            alt="pip-active"
                        />
                    </div>
                </div>}
                <img src={HighlightPip}
                    style={{
                        opacity: isShowHighlightPip ? 1 : 0
                    }}
                    alt="pip-highlight"
                />
            </div>
        </>
    );
};

export default FingerPip;