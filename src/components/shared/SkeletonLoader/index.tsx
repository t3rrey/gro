import { FC } from "react";

export interface ISkeletonLoader {
  tableRows: number;
  tableColumns: number;
}

export const SkeletonLoader: FC<ISkeletonLoader> = ({
  tableRows,
  tableColumns,
}) => {
  return (
    <>
      {Array(tableRows)
        .fill(null)
        .map((_, idx) => (
          <tr className="bg-white" key={idx}>
            {Array(tableColumns)
              .fill(null)
              .map((_, idx) => (
                <td
                  key={idx}
                  className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-0"
                >
                  <div className="h-4 w-24 animate-pulse bg-gray-300 rounded"></div>
                </td>
              ))}
          </tr>
        ))}
    </>
  );
};
