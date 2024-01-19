import { AnimatePresence, motion } from "framer-motion";
export default function Notification() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        className="container fixed top-10 bg-white"
      >
        <div className="p-3">
          <p className="text-lg font-semibold">Notifications</p>
        </div>
        <div className="flex flex-col gap-2 px-5 h-[90vh] overflow-y-auto pb-20">
          {[1, 3, 4, 5, 6].map((info, idx) => (
            <NotificationCard />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

const NotificationCard = () => {
  return (
    <div className="flex flex-col p-2 bg-blue-50 rounded-md">
      <p className="text-md font-semibold px-3">Eyepa Restaurant</p>
      <div className="px-3 py-1">
        <p className="text-sm text-gray-600 leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
          beatae dolore aut.
        </p>
      </div>

      <hr className="border border-b"/>
      <p className="text-right text-xs pt-3">{new Date().toLocaleString()}</p>
    </div>
  );
};
