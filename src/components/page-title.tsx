
type PageTitleProps = {
    title: string
}

const PageTitle = (props: PageTitleProps) => {
    return (
        <div>
            <div className="flex justify-between items-center mb-5 mt-20">
                <h3 className="text-white font-bold text-white text-5xl">{props.title}</h3>
            </div>
        </div>
    )
}

export default PageTitle;