import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Outfit } from "./Text";
import { userData } from "./data";

const UserTable = () => {
  return (
    <TableContainer
      mt="70px"
      backgroundColor="#fff"
      borderRadius="15px"
      boxShadow="0px 2px 20px 16px rgba(223, 220, 255, 0.3)"
    >
      <Table variant="simple">
        <Thead>
          <Tr borderBottom="2px solid rgba(0,0,0,0.1)">
            <Th>
              <Outfit
                props={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                Ride ID
              </Outfit>
            </Th>
            <Th>
              <Outfit
                props={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                Ride Date
              </Outfit>
            </Th>
            <Th>
              <Outfit
                props={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                Driver ID
              </Outfit>
            </Th>
            <Th>
              <Outfit
                props={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                Price
              </Outfit>
            </Th>
            <Th>
              <Outfit
                props={{
                  color: "#000",
                  fontWeight: 600,
                  fontSize: "16px",
                  textTransform: "capitalize",
                }}
              >
                Status
              </Outfit>
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {userData.map((element, idx) => (
            <Tr
              key={idx}
              borderTop="2px solid #fff"
              color="#000"
              fontSize="16px"
              fontWeight={400}
              fontFamily="Ambit"
            >
              <Td pt="30px">{element.rideId}</Td>
              <Td pt="30px">{element.rideDate}</Td>
              <Td pt="30px">{element.driverID}</Td>
              <Td pt="30px">{element.price}</Td>
              <Td
                pt="30px"
                fontWeight={600}
                color={
                  element.status === "Completed"
                    ? "#05C48A"
                    : element.status === "Ongoing"
                    ? "#5446FD"
                    : element.status === "Cancelled"
                    ? "#E00F65"
                    : "#000"
                }
              >
                {element.status}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
