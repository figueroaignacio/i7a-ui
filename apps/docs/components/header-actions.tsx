// Components
import { LocaleSwitcher } from './locale-switcher';
import { Searcher } from './searcher';
import { ToggleTheme } from './toggle-theme';

export function HeaderActions() {
  return (
    <div className="flex items-center gap-4">
      <ToggleTheme />
      <LocaleSwitcher />
      <Searcher />
    </div>
  );
}
