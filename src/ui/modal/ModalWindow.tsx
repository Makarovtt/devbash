import { FC } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";

interface IModalProps {
  isVisible: boolean;
  children?: React.ReactNode;
  onClose: () => void;
  className?: string;
  clasNameOverlay?: string;
}
export const ModalWindow: FC<IModalProps> = ({
  isVisible,
  children,
  onClose,
  className,
  clasNameOverlay,
}) => {
  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={cn(
            "fixed bg-[rgba(0,0,0,0.8)] z-40 inset-0",
            clasNameOverlay
          )}
          onClick={() => onClose()}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.2 },
          }}
        >
          <motion.div
            className="fixed inset-0 overflow-y-auto z-50"
            initial={{
              opacity: 0,
              y: -100,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.2 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.2 },
            }}
          >
            <motion.div className="min-h-full flex justify-center items-center p-4 box-border">
              <div
                className={cn("", className)}
                onClick={(e) => e.stopPropagation()}
              >
                {children}
              </div>
            </motion.div>
            <motion.div
              className="w-[40px] h-[40px] bg-gray-500 absolute top-1 right-1 rounded-full
                        flex justify-center items-center cursor-pointer z-[60] transition
                        hover:bg-gray-300 600:top-5 600:right-5"
              onClick={() => onClose()}
            >
              <X color="black" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
