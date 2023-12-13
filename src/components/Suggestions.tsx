import {useAppDispatch, useAppSelector} from "../app/hook.ts";
import {toggleSuggestion} from "../store/SettingSlice.ts";

export default function Suggestions() {
  const suggestion = useAppSelector(state => state.setting.suggestion);
  const dispatch = useAppDispatch();

  return (
    <aside className="px-5 pt-2">
      <div className="flex items-center space-x-6">
        <label htmlFor="suggestion" className="cursor-pointer select-none">Enable suggestions</label>
        <input type="checkbox" name="suggestion" id="suggestion" className="toggle toggle-primary toggle-sm" checked={suggestion} onChange={() => dispatch(toggleSuggestion())}/>
      </div>
    </aside>
  )
}