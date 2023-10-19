export default function Calendar() {
  return (
    <div className="relative w-full pb-3/4 ml-16 z-10">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=6193920faa3232856f6966a0b68b38ff5298a1b475f64f77899696a2e41d21fc%40group.calendar.google.com&ctz=Asia%2FKolkata"
        style={{ border: 0 }}
        width="100%"
        height="100%"
        frameBorder="0"
        scrolling="no"
        className="absolute inset-0 "
      ></iframe>
    </div>
  );
}
