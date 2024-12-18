// eslint-disable-next-line react/prop-types
export const TextComponent = ({ length = 1 }) => (
  <>
    {Array.from({ length }).map(() => (
      <>
        <h2>Hey I&apos;m the Right Section</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque nec tortor ac volutpat. Donec ultrices erat ac diam
          cursus, nec elementum lectus varius. Proin facilisis, eros eget varius
          aliquet, ligula erat consectetur magna, vitae convallis nibh magna eu
          nisi.
        </p>
        <p>
          Cras sit amet purus eu ligula vulputate consequat. Morbi nec lacus
          malesuada, scelerisque ligula in, condimentum nisi. Pellentesque in
          ligula fringilla, blandit mi sed, volutpat justo.
        </p>
        <p>
          Nam non arcu vel leo pretium ullamcorper. Duis malesuada turpis sit
          amet mauris vehicula, at porttitor nunc aliquet. Quisque bibendum
          mauris sit amet justo pharetra, sed feugiat orci auctor.
        </p>
        <p>
          Integer non nunc velit. Phasellus fermentum nunc at felis tincidunt
          rutrum. Etiam consectetur fermentum erat, id tristique lorem vehicula
          in.
        </p>
        <p>
          Vivamus id justo felis. Nullam malesuada purus in dignissim vulputate.
          Donec feugiat turpis in eros volutpat viverra.
        </p>
      </>
    ))}
  </>
);
