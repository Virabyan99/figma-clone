import { RightSidebarProps } from "@/types/type"
import Color from "./settings/Color"
import Dimensions from "./settings/Dimensions"
import Export from "./settings/Export"
import Text from "./settings/Text"

const RightSideBar = ({
  elementAttributes,
  setElementAttributes,
  fabricRef,
  activeObjectRef,
  isEditingRef,
  syncShapeInStorage
}: RightSidebarProps) => {
  const handleInputChange = (property: string, value: string) => {
    if(!isEditingRef.current) isEditingRef.current = true
  }
  return (
    <section className="flex flex-col border-t border-primary-grey-200 bg-primary-black text-primary-grey-300 min-w-[227px] sticky right-0 h-full max-sm:hidden select-none">
      <h3 className="px-5 pt-4 text-xs uppercase">Design</h3>
      <span className="text-xs text-primary-grey-300 mt-3 px-5 border-b border-primary-grey-200 pb-4">
        Make Changes to Canvas as you Like
      </span>
      <Dimensions
        width={elementAttributes.width}
        height={elementAttributes.height}
        handleInputChange={handleInputChange}
      />
      <Text/>
      <Color/>
      <Color/>
      <Export/>
    </section>
  )
}

export default RightSideBar
