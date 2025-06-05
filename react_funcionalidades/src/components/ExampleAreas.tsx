import { ReactNode } from "react"

type ExampleAreasProps = {
    children: ReactNode;
}

export const ExampleAreas = ({children}: ExampleAreasProps) => {
    return(
    <div className="h-100 w-full bg-blue-200 border-b-2 border-black mb-20 flex flex-col  justify-center items-center">
        {children}
    </div>
    )
}