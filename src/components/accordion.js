import React from 'react';

const Accordion = ({children, title = 'Проекты', open = false}) => {

    const [openState, setOpenState] = React.useState(open);

    return (
        <div className="m-accordion">
            <div className="m-accordion__caption">
                <div className="a-accordion-project-caption">
                    <p className="a-accordion-project-caption__title">{title}</p>
                    <i className="a-accordion-project-caption__icon" data-opened={openState}
                       onClick={() => setOpenState(!openState)}/>
                </div>
            </div>
            <div className="m-accordion__section" data-opened={openState}>
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Accordion;