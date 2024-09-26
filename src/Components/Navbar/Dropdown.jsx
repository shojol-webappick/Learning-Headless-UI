import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ArchiveBoxXMarkIcon,
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/16/solid";

export default function Dropdown() {
  return (
    <div className="relative inline-block text-right">
      <Menu>
        <MenuButton className="inline-flex items-center ">
          Options
          <ChevronDownIcon className="size-4 fill-blue-600" />
        </MenuButton>

        <MenuItems
          transition
          className="absolute right-0 mt-4 w-52 origin-top-right rounded-xl border border-blue-500/5 bg-blue-400 p-1 text-sm/6 text-white shadow-lg focus:outline-none"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
              <PencilIcon className="size-4 " />
              Edit
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">
                ⌘E
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
              <Square2StackIcon className="size-4 " />
              Duplicate
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
              <ArchiveBoxXMarkIcon className="size-4 f" />
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">
                ⌘A
              </kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 hover:bg-white/10">
              <TrashIcon className="size-4 f" />
              Delete
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-hover:inline">
                ⌘D
              </kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
