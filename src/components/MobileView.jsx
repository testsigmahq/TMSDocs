import React from "react";
import LeftNav from "../components/LeftNav";

import "./MobileView.scss"

class MobileView extends React.Component{
    state = {
        divcontainer:false,
    }
    render() {
        const handleChange = () => {
            this.setState({divcontainer:!this.state.divcontainer});
        }
        const { navSubsections, activeSubSection, activeNavData } = this.props;
        const x = this.state.divcontainer;
        return (
            <>
                <div className={x ? 'hamburger active' : 'hamburger '} onClick={handleChange}>
                    <span></span>
                </div>
                <LeftNav
                    navSubsections={navSubsections}
                    activeSubSection={activeSubSection}
                    activeNavData={activeNavData}
                />
            </>

        )
    }
}

export default MobileView;