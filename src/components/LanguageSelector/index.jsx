
const LanguageSelector = ({ onSelectLanguage }) => {
  return (
    <select
      className="mt-4 p-2 border rounded"
      onChange={(e) => onSelectLanguage(e.target.value)}
    >
      <option value="english">English</option>
      <option value="spanish">Spanish</option>
      <option value="french">French</option>
    </select>
  );
};

export default LanguageSelector;
