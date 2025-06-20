type customButtonProps = {
    label: string;
    onClick: () => void
}

export const CustomButton = ({label, onClick}: customButtonProps) => {
    return (
        <button onClick={onClick} className="p-3 text-white bg-blue-700">{label}</button>
    )
}