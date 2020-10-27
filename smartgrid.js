const smartgridSettings = {
    outputStyle: 'sass', /* less || scss || sass || styl */
    columns: 12, /* number of grid columns */
    offset: '30px', /* gutter width px || % || rem */
    mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
    container: {
        maxWidth: '1381px', /* max-width оn very large screen */
        fields: '15px' /* side fields */
    },
    breakPoints: {
        xxx: {
            width: "1500px",
        },
        md: {
            width: "920px",
        },
        sm: {
            width: "720px"
        },
        xs: {
            width: "576px"
        },
        xxs: {
            width: "420px"
        }
    }
};

export default smartgridSettings;