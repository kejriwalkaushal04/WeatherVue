const Footer = ({ weatherData }) => {
    const FooterContent = (
        <>
            <div className="h-1 bg-green-500 w-full"></div>
            <div className="h-[9vh] flex items-center justify-between px-10">
                <div></div>
                <p className="text-center text-green-500 text-sm font-semibold">
                    © {new Date().getFullYear()} Kaushal Kejriwal. All rights reserved.
                </p>
                <a href="https://github.com/kejriwalkaushal04" className="tx-xl text-green-500">Github</a>
            </div>
        </>
    );

    return (
        <div className={`${weatherData ? '' : 'fixed bottom-0'} left-0 z-30 w-screen`}>
            {FooterContent}
        </div>
    );
};

export default Footer;
