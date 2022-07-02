import { useEffect } from "react"

const useDocumentTitle = title => {
    useEffect(() => {
        if (!!title){
            document.title = title;
        }
        return () => {
            document.title = 'React App'
        }
    }, [title]);
}

export default useDocumentTitle;