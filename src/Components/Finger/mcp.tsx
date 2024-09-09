import ActiveMcp from "../../assets/images/active/mcp-active.png"
import HighlightMcp from "../../assets/images/finger_highlight/mcp-highlight.png"

interface FingerMcpProps {
    isShowHighlightMcp: boolean
    isSelectedAll: boolean
    _handleOnClickMcp: () => void
}
const FingerMcp = (props: FingerMcpProps): JSX.Element => {
    const { isShowHighlightMcp, isSelectedAll, _handleOnClickMcp } = props;
    return (
        <>
            <div className="w-100 z-30 absolute top-3 left-[15%] top-[38.5%] w-[59.8%]"
                onClick={_handleOnClickMcp}>
                {!isSelectedAll && <div className="relative">
                    <div className="absolute top-[-35px] left-[130px] w-[130px]">
                        <img src={ActiveMcp}
                            style={{
                                opacity: isShowHighlightMcp ? 1 : 0
                            }}
                            alt="mcp-active"
                        />
                    </div>
                </div>}
                <img src={HighlightMcp}
                    style={{
                        opacity: isShowHighlightMcp ? 1 : 0
                    }}
                    alt="mcp-highlight"
                />
            </div>

        </>

    )
}

export default FingerMcp;