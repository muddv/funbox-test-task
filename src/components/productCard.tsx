import Image from "next/image"
import { useState } from "react"
import cat from "../assets/product-card__image.png"

function ProductCard(props: { cardDisabled: boolean }) {
    const [productSelected, setProductSelected] = useState(false)
    const [hoverOnSelection, setHoverOnSelection] = useState(false)

    function handleProductClick() {
        if (!props.cardDisabled) {
            setProductSelected(!productSelected)
            setCallToAction(productSelected ? "Чего сидишь, порадуй котэ," : "Вкусный корм для котов")
            setHoverOnSelection(false)
        }
    }

    function handleProductHover() {
        if (hoverOnSelection === false) {
            setHoverOnSelection(!hoverOnSelection)
        }
    }

    const [callToAction, setCallToAction] = useState("Чего сидишь, порадуй котэ,")

    const cardDisabledText = "Печалька этот закончился"

    function cardClassResolver() {
        let cardClass
        if (productSelected) {
            if (hoverOnSelection) {
                cardClass = "group product-card bg-red-selected hover:bg-red-selected-hover h-[480px] w-80 relative border-0 rounded-lg"
                return cardClass
            }
            else {
                cardClass = "group product-card bg-red-selected h-[480px] w-80 relative border-0 rounded-lg"
                return cardClass
            }
        }

        if (props.cardDisabled) {
            cardClass = "group product-card bg-gray-400 h-[480px] w-80 relative border-0 rounded-lg"
            return cardClass
        }

        else {
            cardClass = "group product-card bg-blue-default hover:bg-blue-hover h-[480px] w-80 relative border-0 rounded-lg"
            return cardClass
        }
    }

    function weightLabelClassResolver() {
        let weightLabelClass
        if (productSelected) {
            if (hoverOnSelection) {
                weightLabelClass = "text-white bg-red-selected group-hover:bg-red-selected-hover border-0 rounded-full w-20 h-20 flex flex-col justify-center items-center"
                return weightLabelClass
            }
            else {
                weightLabelClass = "text-white bg-red-selected border-0 rounded-full w-20 h-20 flex flex-col justify-center items-center"
                return weightLabelClass
            }
        }

        if (props.cardDisabled) {
            weightLabelClass = "text-white bg-gray-400 border-0 rounded-full w-20 h-20 flex flex-col justify-center items-center"
            return weightLabelClass
        }

        else {
            weightLabelClass = "text-white bg-blue-default group-hover:bg-blue-hover border-0 rounded-full w-20 h-20 flex flex-col justify-center items-center"
            return weightLabelClass
        }
    }

    return (
        <div className="flex flex-col flex-none">
            <div onMouseLeave={handleProductHover} onClick={handleProductClick} className={cardClassResolver()}>
                <div className="product-card bg-white relative h-[472px] w-[312px] top-1 left-1 border-0 rounded-lg">
                    <div className={props.cardDisabled ? "absolute top-6 left-5 text-gray-300" : "absolute top-6 left-5 text-gray-400"}>
                        <div>Сказочное заморское явство</div>
                        <h2 className={props.cardDisabled ? "text-[40pt] text-gray-300 font-semibold" : "text-[40pt] text-black font-semibold"}>Нямушка</h2>
                        <h2 className={props.cardDisabled ? "text-[15pt] text-gray-300 font-semibold -mt-3" : "text-[15pt] text-black font-semibold -mt-3"}>с фуа-гра</h2>
                        <div>10 порций</div>
                        <div>мышь в подарок</div>

                    </div>
                    <div className={props.cardDisabled ? "relative right-7 top-[215px] w-[400px] opacity-50" : "relative right-7 top-[215px] w-[400px]"}><Image src={cat} alt="кот"></Image></div>
                    <div className="absolute left-56 bottom-3"> <div className={weightLabelClassResolver()}><div className="text-4xl mt-1">2</div> <div>КГ</div></div></div>
                </div>
            </div>
            <div className={props.cardDisabled ? "text-center text-yellow-600" : "text-center text-white"}>
                {props.cardDisabled ? cardDisabledText : callToAction} {" "}
                <button onClick={handleProductClick}
                    className={productSelected || props.cardDisabled ? "hidden" : "text-blue-default hover:text-blue-hover"}><span className="underline decoration-dotted">купи</span>.</button></div>
        </div>
    )
}

export default ProductCard