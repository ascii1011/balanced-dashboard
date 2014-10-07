import DateSelectFormFieldView from "./date-select-form-field";
import Constants from "balanced-dashboard/utils/constants";

var MonthYearSelectFormFieldView = DateSelectFormFieldView.extend({
	templateName: "form-fields/month-year-select-form-field",

	validMonths: Constants.TIME.MONTHS,

	validYears: function() {
		var years = [];
		var currentYear = (new Date()).getFullYear();
		var name = this.get('name');
		if (name === "dob") {
			return _.times(100, function(i) {
				return currentYear - i;
			});
		} else if (name === "expiration_date") {
			return _.times(10, function(i) {
				return currentYear + i;
			});
		}
	}.property('name')
});

export default MonthYearSelectFormFieldView;
