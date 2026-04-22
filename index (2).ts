/* frontend/src/components/QuoteForm/QuoteForm.module.css */
.wrapper {
  background: var(--white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  border: 1px solid var(--grey-200);
  padding: 40px;
  max-width: 620px;
  width: 100%;
}

/* Progress */
.progress {
  display: flex;
  align-items: flex-start;
  gap: 0;
  position: relative;
  margin-bottom: 40px;
}

.progressTrack {
  position: absolute;
  top: 18px;
  left: 36px;
  right: 36px;
  height: 2px;
  background: var(--grey-200);
  z-index: 0;
}

.progressFill {
  height: 100%;
  background: var(--red);
  transition: width 0.4s ease;
}

.progressStep {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  position: relative;
  z-index: 1;
}

.progressDot {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--white);
  border: 2px solid var(--grey-200);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--grey-400);
  transition: all 0.25s ease;
}

.active .progressDot {
  background: var(--red);
  border-color: var(--red);
  color: var(--white);
}

.progressLabel {
  font-size: 0.75rem;
  font-weight: 500;
  color: var(--grey-400);
  text-align: center;
  white-space: nowrap;
}

.active .progressLabel {
  color: var(--navy);
  font-weight: 600;
}

/* Fields */
.stepContent {
  min-height: 240px;
  margin-bottom: 32px;
}

.fields {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.hint {
  font-size: 0.8rem;
  color: var(--grey-400);
  margin-top: 6px;
}

/* Option buttons */
.optionGrid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 10px;
  margin-top: 4px;
}

.optionBtn {
  padding: 10px 14px;
  border: 1.5px solid var(--grey-200);
  border-radius: var(--radius-sm);
  background: var(--white);
  font-family: var(--font-body);
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--slate);
  cursor: pointer;
  transition: all 0.15s ease;
  text-align: center;
}

.optionBtn:hover {
  border-color: var(--red);
  color: var(--red);
}

.optionBtn.selected {
  background: var(--red);
  border-color: var(--red);
  color: var(--white);
}

/* Error */
.error {
  background: #FFEBEE;
  color: var(--red);
  padding: 10px 16px;
  border-radius: var(--radius-sm);
  font-size: 0.875rem;
  margin-bottom: 20px;
  border-left: 3px solid var(--red);
}

/* Nav */
.nav {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-top: 8px;
  border-top: 1px solid var(--grey-200);
}

@media (max-width: 560px) {
  .wrapper { padding: 24px; }
  .row { grid-template-columns: 1fr; }
  .optionGrid { grid-template-columns: repeat(2, 1fr); }
}
