"use client";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useState } from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { useRouter } from "next/navigation";

const permissionGroups = [

  {
    title:
      "User Management",

    permissions: [
      "Create User",
      "Edit User",
      "View User",
      "Deactivate User",
    ],
  },

  {
    title:
      "Product Management",

    permissions: [
      "Frames",
      "Brands",
      "Categories",
      "Materials",
      "Contact Lens",
    ],
  },

  {
    title:
      "Inventory",

    permissions: [
      "Stock Management",
      "Purchase Entry",
      "Barcode Access",
    ],
  },

  {
    title:
      "Billing & Sales",

    permissions: [
      "Billing Access",
      "Reports",
      "Customer Management",
    ],
  },

];

export default function RoleForm() {

  const router =
    useRouter();

  const [roleName, setRoleName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [status, setStatus] =
    useState("Active");

  const [selectedPermissions,
    setSelectedPermissions] =
      useState<string[]>([]);

  const handlePermissionChange = (
    permission: string
  ) => {

    setSelectedPermissions(
      (prev) =>

        prev.includes(
          permission
        )

          ? prev.filter(
              (item) =>
                item !==
                permission
            )

          : [
              ...prev,
              permission,
            ]
    );
  };

  const handleSubmit = () => {

    const payload = {

      roleName,

      description,

      status,

      permissions:
        selectedPermissions,
    };

    console.log(
      "Role Data:",
      payload
    );

    router.push("/roles");
  };

  return (
    <Box
      sx={{
        p: 3,
      }}
    >
      <Box sx={{ mb: 3 }}>
        <Link
          href="/roles"
          style={{
            textDecoration:"none",
          }}
        >
          <Button
            startIcon={
              <ArrowBackIcon />
            }
            sx={{
              textTransform:"none",
              fontWeight:600,
            }}
          >
            Back to Roles
          </Button>
        </Link>
      </Box>
      <Box
        sx={{
          background:
            "#FFFFFF",

          borderRadius:
            "24px",

          border:
            "1px solid #E2E8F0",

          p: 4,
        }}
      >
        {/* HEADER */}
        <Typography
          sx={{
            fontSize:
              "28px",

            fontWeight: 700,

            color:
              "#0F172A",

            mb: 4,
          }}
        >
          Add Role
        </Typography>

        {/* FORM */}
        <Box
          sx={{
            display: "grid",

            gridTemplateColumns:
              {
                xs: "1fr",

                md: "1fr 1fr",
              },

            gap: 3,
          }}
        >
          {/* ROLE NAME */}
          <TextField
            fullWidth
            label="Role Name"
            value={roleName}
            onChange={(e) =>
              setRoleName(
                e.target.value
              )
            }
          />

          {/* STATUS */}
          <TextField
            select
            fullWidth
            label="Status"
            value={status}
            onChange={(e) =>
              setStatus(
                e.target.value
              )
            }
          >
            <option value="Active">
              Active
            </option>

            <option value="Inactive">
              Inactive
            </option>

          </TextField>

        </Box>

        {/* DESCRIPTION */}
        <TextField
          fullWidth
          multiline
          rows={4}
          label="Description"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          sx={{
            mt: 3,
          }}
        />

        {/* PERMISSIONS */}
        <Box
          sx={{
            mt: 5,
          }}
        >
          <Typography
            sx={{
              fontSize:
                "22px",

              fontWeight: 700,

              color:
                "#0F172A",

              mb: 3,
            }}
          >
            Permissions
          </Typography>

          <Box
            sx={{
              display: "grid",

              gridTemplateColumns:
                {
                  xs: "1fr",

                  md: "1fr 1fr",
                },

              gap: 3,
            }}
          >
            {permissionGroups.map(
              (group) => (

                <Box
                  key={group.title}
                  sx={{
                    border:
                      "1px solid #E2E8F0",

                    borderRadius:
                      "18px",

                    p: 3,

                    background:
                      "#F8FAFC",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize:
                        "18px",

                      fontWeight: 700,

                      color:
                        "#0F172A",

                      mb: 2,
                    }}
                  >
                    {
                      group.title
                    }
                  </Typography>

                  <Divider
                    sx={{
                      mb: 2,
                    }}
                  />

                  <Box
                    sx={{
                      display:
                        "flex",

                      flexDirection:
                        "column",

                      gap: 1,
                    }}
                  >
                    {group.permissions.map(
                      (
                        permission
                      ) => (

                        <FormControlLabel
                          key={
                            permission
                          }
                          control={
                            <Checkbox
                              checked={selectedPermissions.includes(
                                permission
                              )}
                              onChange={() =>
                                handlePermissionChange(
                                  permission
                                )
                              }
                            />
                          }
                          label={
                            permission
                          }
                        />
                      )
                    )}

                  </Box>

                </Box>
              )
            )}

          </Box>

        </Box>

        {/* BUTTONS */}
        <Box
          sx={{
            display: "flex",

            justifyContent:
              "flex-end",

            gap: 2,

            mt: 5,
          }}
        >
          <Button
            variant="outlined"
            onClick={() =>
              router.push(
                "/roles"
              )
            }
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            onClick={
              handleSubmit
            }
          >
            Save Role
          </Button>

        </Box>

      </Box>

    </Box>
  );
}