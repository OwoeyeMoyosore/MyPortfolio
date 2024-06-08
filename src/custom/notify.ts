import { enqueueSnackbar } from 'notistack';


export const notify = (message:string, variant:any, direction?: string)=> {
	return enqueueSnackbar(message, {
		variant: variant,
		autoHideDuration: 1000,
		anchorOrigin: { vertical: 'top', horizontal: direction ? direction : 'center' },
		style: {fontSize:"16px"}, 
	});
};