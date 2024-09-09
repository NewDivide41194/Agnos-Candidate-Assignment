import { useState } from "react";
import { Abdnominal, Finger } from "../../Components";

const HomePage = (): JSX.Element => {
    const [page, setPage] = useState<number>(1);
    const _handleOnClickNext = (): void => {
        setPage(2);
    }
    const _handleOnClickFinish = (): void => {
        window.alert("Finish!")
    }

    return (
        <div className="flex flex-wrap justify-center">
            <div className="text-center py-4 text-lg w-full">
                Agnos Candidate Assignment
            </div>
            {
                page === 1 ?
                    <Finger />
                    :
                    <Abdnominal />
            }
            <div className="w-full text-center py-4">
                {page === 1 ?
                    <button className="w-full rounded-xl p-2 px-4 shadow"
                        style={{ maxWidth: 326, minWidth:20 }}
                        onClick={_handleOnClickNext}>
                        ต่อไป
                    </button> :
                    <button className="w-full rounded-xl p-2 px-4 shadow"
                        style={{ maxWidth: 413, minWidth:20 }}
                        onClick={_handleOnClickFinish}>
                        เสร็จแล้ว
                    </button>}
            </div>
        </div>
    )
}

export default HomePage;