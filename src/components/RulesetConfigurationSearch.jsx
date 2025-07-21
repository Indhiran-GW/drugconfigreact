import React from "react";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { TextBox } from "@progress/kendo-react-inputs";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { Button } from "@progress/kendo-react-buttons";
import "./RulesetConfigurationSearch.css";

const RulesetConfigurationSearch = ({ onSearch, onClear }) => {
  const [expanded, setExpanded] = React.useState([]);
  const [formData, setFormData] = React.useState({
    Name: "",
    effectiveDate: null,
    termDate: null,
    lastModified: null
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Collapse the accordion
    setExpanded([]);
    // Call the search function with form data
    if (onSearch) {
      onSearch(formData);
    }
    console.log('Search submitted with data:', formData);
  };

  const handleClear = () => {
    setFormData({
      Name: "",
      effectiveDate: null,
      termDate: null,
      lastModified: null
    });
    if (onClear) {
      onClear();
    }
    console.log('Form cleared');
  };

  const handleSelect = (event) => {
    setExpanded(event.ids);
  };

  return (
    <div className="ruleset-search-container">
      <PanelBar onSelect={handleSelect} expanded={expanded}>
        <PanelBarItem title="Search By" id="search-panel">
          <form onSubmit={handleSubmit}>
            {/* Input Fields Row */}
            <div className="form-row">
              {/* Name */}
              <div className="form-field">
                <label className="k-label" htmlFor="Name">Name</label>
                <TextBox
                  id="Name"
                  name="Name"
                  value={formData.Name}
                  onChange={(e) => handleInputChange('Name', e.target.value)}
                  placeholder="Search"
                />
              </div>

              {/* Effective Date */}
              <div className="form-field">
                <label className="k-label" htmlFor="effectiveDate">Effective Date</label>
                <DatePicker
                  id="effectiveDate"
                  name="EffectiveDate"
                  value={formData.effectiveDate}
                  onChange={(e) => handleInputChange('effectiveDate', e.target.value)}
                  placeholder="MM/dd/yyyy"
                  format="MM/dd/yyyy"
                />
              </div>

              {/* Term Date */}
              <div className="form-field">
                <label className="k-label" htmlFor="termDate">Term Date</label>
                <DatePicker
                  id="termDate"
                  name="TermDate"
                  value={formData.termDate}
                  onChange={(e) => handleInputChange('termDate', e.target.value)}
                  placeholder="MM/dd/yyyy"
                  format="MM/dd/yyyy"
                />
              </div>

              {/* Last Modified */}
              <div className="form-field">
                <label className="k-label" htmlFor="lastModified">Last Modified</label>
                <DatePicker
                  id="lastModified"
                  name="LastModified"
                  value={formData.lastModified}
                  onChange={(e) => handleInputChange('lastModified', e.target.value)}
                  placeholder="MM/dd/yyyy"
                  format="MM/dd/yyyy"
                />
              </div>
            </div>

            {/* Buttons Row */}
            <div className="button-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Button 
                type="button" 
                fillMode="outline" 
                className="btn-secondary"
                onClick={handleClear}
              >
                Clear
              </Button>
              <Button 
                type="submit" 
                themeColor="primary"
                className="button"
              >
                Search
              </Button>
            </div>
          </form>
        </PanelBarItem>
      </PanelBar>
    </div>
  );
};

export default RulesetConfigurationSearch;
