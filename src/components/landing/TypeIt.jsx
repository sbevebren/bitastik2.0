import TypeIt from "typeit-react";

export default function TypeItComponent() {
  return (
    <div className="text-white h-screen flex flex-col items-center justify-center">
      <h1 className="font-mono text-6xl sm:text-9xl">
        <TypeIt
          options={{
            strings: ["Bitastik"],
            waitUntilVisible: true,
            cursorChar: " ",
          }}
        />
      </h1>
      <h1 className="font-mono text-2xl sm:text-6xl">
        <TypeIt
          getBeforeInit={(instance) => {
            instance
              .pause(1000)
              .type("Making Bit Fantastic")
              .pause(750)
              .delete(9)
              .pause(500)
              .type("Sarcastic")
              .pause(750)
              .delete(9)
              .pause(500)
              .type("Romantic")
              .pause(750)
              .delete(8)
              .type("Enthusiastic")
              .pause(750)
              .delete(12)
              .pause(500)
              .type("Bombastic");
            return instance;
          }}
          options={{
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}
