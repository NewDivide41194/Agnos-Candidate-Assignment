import ActiveDip from "../../assets/images/finger_active/dip-active.png";
import HighlightDip from "../../assets/images/finger_highlight/dip-highlight.png";

interface FingerDipProps {
    isShowHighlightDip: boolean
    isSelectedAll: boolean
    _handleOnClickDip: () => void
}
const FingerDip = (props: FingerDipProps): JSX.Element => {
    const { isShowHighlightDip, isSelectedAll, _handleOnClickDip } = props;
    return (
        <>
            <div className="w-100 z-10 absolute left-[7%] top-[15.8%] w-[51%]"
                onClick={_handleOnClickDip}>
                {!isSelectedAll && <div className="relative">
                    <div className="absolute top-[-20px] left-[158px] w-[130px]">
                        <img src={ActiveDip}
                            style={{
                                opacity: isShowHighlightDip ? 1 : 0
                            }}
                            alt="dip-active"
                        />
                    </div>
                </div>}
                <img src={HighlightDip}

                    style={{
                        opacity: isShowHighlightDip ? 1 : 0
                    }}
                    alt="dip-highlight"
                />
            </div>

        </>

    );
};

export default FingerDip;