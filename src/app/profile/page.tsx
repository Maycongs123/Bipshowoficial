"use client";
import { Avatar, Button } from "@/components";
import { AvatarWithTabs } from "../../components/AvatarWithTabs/AvatarWithTabs";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import MeusIngressos from "../meus-ingressos/page";
import { userService } from "@/services";
import { IUser } from "@/types";

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const fetchUserData = async () => {
    const response = await userService.getUserTokenData();
    setUser(response);
  };

  const updateUserData = async () => {
    const response = await userService.updateUser(user);
    console.log(response);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const [user, setUser] = useState<IUser>({});

  const handleInputChange = (event: any, key: string) => {
    setUser({ ...user, [key]: event.target.value });
  };

  const handleButtonClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = handleImageSelect;
    input.click();
  };

  const handleEdit = () => {
    if (!isEditing) {
      setIsEditing(true);
    } else {
      updateUserData();
      setIsEditing(false);
    }
  };

  const handleImageSelect = (e: any) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        if (base64String) {
          setUser({ ...user, imagem: String(base64String) });
        }
        console.log("Imagem em base64:", base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full flex flex-1 flex-row gap-2 px-4 md:px-14 xl:px-20 2xl:px-14  pt-10 pb-10 overflow-x-hidden">
      <AvatarWithTabs
        activeTab={activeTab}
        size="normal"
        handleChangeTab={handleChange}
      />
      <div className="w-full flex flex-1 flex-column gap-4  overflow-x-hidden">
        {activeTab == 1 && (
          <div className="flex-column gap-4 flex-1 p-4">
            <div className="flex flex-row gap-3  w-full p-5 pb-4 items-center">
              <Image src="/my-profile.svg" alt="" width={32} height={32} />
              <h2 className="h-fit font-semibold text-2xl">Meu perfil</h2>
            </div>
            <div className="flex flex-row justify-between">
              <div className="relative">
                <Avatar src={user?.imagem} size="medium" />
                {isEditing && (
                  <div
                    className="rounded-full bg-gray border-2 border-white w-8 h-8 absolute bottom-2 right-5 flex items-center justify-center"
                    onClick={handleButtonClick}
                  >
                    <Image src={"/camera.svg"} width={16} height={16} alt="" />
                  </div>
                )}
              </div>
              <Button
                variant="secondary"
                onClick={handleEdit}
                gray={!isEditing}
              >
                <Image
                  src={!isEditing ? "/edit.svg" : "/save.svg"}
                  width={16}
                  height={16}
                  alt=""
                />
                {isEditing ? "Salvar" : "Editar"}
              </Button>
            </div>
            {isEditing == false && (
              <>
                <div className="mb-6">
                  <p className="text-sm font-normal">Nome</p>
                  <p className="text-lg font-medium">{user?.nome}</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-normal">E-mail</p>
                  <p className="text-lg font-medium">{user?.email}</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-normal">Celular</p>
                  <p className="text-lg font-medium">{user?.telefone}</p>
                </div>
                <div className="mb-6">
                  <p className="text-sm font-normal">Endereço</p>
                  <p className="text-lg font-medium">
                    {user?.endereco?.bairro?.trim() != ""
                      ? user?.endereco?.bairro
                      : "Nenhum"}{" "}
                  </p>
                </div>
              </>
            )}
            {isEditing == true && (
              <>
                <div className="mb-6">
                  <p className="text-sm font-normal">Nome</p>

                  <TextField
                    value={user?.nome}
                    onChange={(e) => handleInputChange(e, "nome")}
                  />
                </div>
                <div className="mb-6">
                  <p className="text-sm font-normal">E-mail</p>

                  <TextField
                    value={user?.email}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                </div>
                <div className="mb-6">
                  <p className="text-sm font-normal">Celular</p>

                  <TextField
                    value={user?.telefone}
                    onChange={(e) => handleInputChange(e, "telefone")}
                  />
                </div>
                <div className="mb-6">
                  <p className="text-sm font-normal">Endereço</p>

                  <TextField
                    value={user?.endereco?.bairro}
                    onChange={(e) => handleInputChange(e, "endereco")}
                  />
                </div>
              </>
            )}
          </div>
        )}
        {activeTab === 0 && <MeusIngressos />}
      </div>
    </div>
  );
}
