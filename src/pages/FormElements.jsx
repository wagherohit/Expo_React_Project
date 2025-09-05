import React, { useState } from 'react';
import './FormElements.css';

function FormElements() {
  const [form, setForm] = useState({
    sampleSwitch: false,
    primarySwitch: true,
    confirmSwitch: true,
    sampleCheckbox: false,
    primaryCheckbox: true,
    confirmCheckbox: false,
  });
    const [selectedRadio, setSelectedRadio] = useState('confirm');

      const handleChange = (e) => {
    setSelectedRadio(e.target.value);
  };


  const handleSwitchChange = (e) => {
    const { name, checked } = e.target;
    setForm({ ...form, [name]: checked });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Form Element</h2>
      <div className="row">
       
        <div className="col-md-8">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="First Name" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Last Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email address" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="✈ City" />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="🌐 Country" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" placeholder="Message"></textarea>
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Primary color" />
          </div>
           <div className="mb-3">
            <input type="text" className="form-control" placeholder="Accent color" />
          </div>
           <div className="mb-3">
            <input type="text" className="form-control" placeholder="Seacondary color" />
          </div>
        </div>

       
        <div className="col-md-4">
          <h4>Switches</h4>
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="sampleSwitch"
              name="sampleSwitch"
              checked={form.sampleSwitch}
              onChange={handleSwitchChange}
            />
            <label className="form-check-label" htmlFor="sampleSwitch">
              01. Sample Switch
            </label>
          </div>

          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="primarySwitch"
              name="primarySwitch"
              checked={form.primarySwitch}
              onChange={handleSwitchChange}
            />
            <label className="form-check-label" htmlFor="primarySwitch">
              02. Primary Color Switch
            </label>
          </div>

          <div className="form-check form-switch mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              id="confirmSwitch"
              name="confirmSwitch"
              checked={form.confirmSwitch}
              onChange={handleSwitchChange}
            />
            <label className="form-check-label" htmlFor="confirmSwitch">
              03. Confirm Color Switch
            </label>
          </div>

          <h4>Selectboxes</h4>
          <div className="mb-4">
            <select className="form-select">
              <option>English</option>
              <option>Hindi</option>
              <option>Spanish</option>
            </select>
          </div>

          <h4>Checkboxes</h4>
          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="sampleCheckbox"
              name="sampleCheckbox"
              checked={form.sampleCheckbox}
              onChange={handleSwitchChange}
            />
            <label className="form-check-label" htmlFor="sampleCheckbox">
              01. Sample Checkbox
            </label>
          </div>

          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="primaryCheckbox"
              name="primaryCheckbox"
              checked={form.primaryCheckbox}
              onChange={handleSwitchChange}
            />
            <label className="form-check-label" htmlFor="primaryCheckbox">
              02. Primary Color Checkbox
            </label>
          </div>

          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="confirmCheckbox"
              name="confirmCheckbox"
              checked={form.confirmCheckbox}
              onChange={handleSwitchChange}
            />
            <label className="form-check-label" htmlFor="confirmCheckbox">
              03. Confirm Color Checkbox
            </label>
          </div>

          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="confirmCheckbox"
              name="confirmCheckbox"
              checked={form.confirmCheckbox}
              onChange={handleSwitchChange}
            />
            <label className="form-check-label" htmlFor="confirmCheckbox">
              04. Disabled Checkbox
            </label>
          </div>

          <div className="form-check mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              id="confirmCheckbox"
              name="confirmCheckbox"
              checked={form.confirmCheckbox}
              onChange={handleSwitchChange}
            />
            <label className="form-check-label" htmlFor="confirmCheckbox">
              05. Disabled  Checkbox active
            </label>
          </div>

            <div className="container my-5">
      <h4 className="mb-4">Radios</h4>

      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="radio"
          name="radioOptions"
          id="sampleRadio"
          value="sample"
          checked={selectedRadio === 'sample'}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="sampleRadio">
          01. Sample radio
        </label>
      </div>

      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="radio"
          name="radioOptions"
          id="primaryRadio"
          value="primary"
          checked={selectedRadio === 'primary'}
          onChange={handleChange}
          style={{ accentColor: '#f13a8f' }} 
        />
        <label className="form-check-label" htmlFor="primaryRadio">
          02. Primary Color radio
        </label>
      </div>

      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="radio"
          name="radioOptions"
          id="confirmRadio"
          value="confirm"
          checked={selectedRadio === 'confirm'}
          onChange={handleChange}
          style={{ accentColor: '#04172a' }} 
        />
        <label className="form-check-label" htmlFor="confirmRadio">
          03. Confirm Color radio
        </label>
      </div>

      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="radio"
          name="radioOptionsDisabled"
          id="disabledRadio"
          value="disabled"
          disabled
        />
        <label className="form-check-label text-muted" htmlFor="disabledRadio">
          04. Disabled radio
        </label>
      </div>

      <div className="form-check mb-2">
        <input
          className="form-check-input"
          type="radio"
          name="radioOptionsDisabled"
          id="disabledActiveRadio"
          value="disabledActive"
          disabled
          checked
        />
        <label className="form-check-label text-muted" htmlFor="disabledActiveRadio">
          05. Disabled radio active
        </label>
      </div>
    </div>

        </div>
      </div>
    </div>
  );
}

export default FormElements;
